import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ParticleUniverse — a full-screen, fixed WebGL backdrop rendering a drifting
 * "data network": glowing nodes connected by lines that form and break as the
 * nodes move. Theme-aware:
 *   • dark mode  -> additive blending, bright neon, lines fade to black
 *   • light mode -> normal blending, deeper colors, lines fade to the light bg
 * (Additive blending is invisible on a light background, hence the switch.)
 *
 * Vanilla three.js (no react-three-fiber). Re-initialises when the theme
 * toggles. Sits behind all content (pointer-events: none) and reacts subtly
 * to the cursor for a parallax, "alive" feel.
 */

const NODE_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  attribute float aScale;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vGlow;
  void main() {
    vColor = aColor;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    float twinkle = 0.7 + 0.3 * sin(uTime * 1.6 + position.x * 3.0 + position.y);
    vGlow = twinkle;
    gl_PointSize = uSize * aScale * uPixelRatio * twinkle * (300.0 / -mvPosition.z);
  }
`;

// uDark: 1.0 = additive-style bright halo, 0.0 = solid-ish dot for light bg.
const NODE_FRAG = /* glsl */ `
  uniform float uDark;
  varying vec3 vColor;
  varying float vGlow;
  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float core = smoothstep(0.5, 0.0, d);
    float halo = smoothstep(0.5, 0.15, d);
    float alpha = pow(core, mix(1.1, 1.4, uDark));
    vec3 color = vColor * (0.8 + 0.7 * vGlow) + halo * 0.15 * uDark;
    gl_FragColor = vec4(color, alpha);
  }
`;

const PALETTE_DARK = [
  new THREE.Color('#22d3ee'),
  new THREE.Color('#38bdf8'),
  new THREE.Color('#818cf8'),
  new THREE.Color('#a855f7'),
  new THREE.Color('#e879f9'),
];
// Deeper, more saturated for visibility on a light background.
const PALETTE_LIGHT = [
  new THREE.Color('#0891b2'),
  new THREE.Color('#2563eb'),
  new THREE.Color('#6366f1'),
  new THREE.Color('#7c3aed'),
  new THREE.Color('#c026d3'),
];

const ParticleUniverse = ({ darkMode = true }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isDark = darkMode;
    const PALETTE = isDark ? PALETTE_DARK : PALETTE_LIGHT;
    const fadeColor = isDark
      ? new THREE.Color(0, 0, 0)
      : new THREE.Color('#eef2fb'); // lines fade toward the light bg

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const NODES = isMobile ? 80 : 170;
    const BOUNDS = { x: 480, y: 300, z: 240 };
    const LINK_DIST = isMobile ? 110 : 135;
    const MAX_LINKS = NODES * 8;
    const blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;

    // --- Renderer -----------------------------------------------------------
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    const pr = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // --- Scene / camera -----------------------------------------------------
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(
      isDark ? 0x05060f : 0xeef2fb,
      isDark ? 0.0013 : 0.0016
    );

    const camera = new THREE.PerspectiveCamera(
      62,
      window.innerWidth / window.innerHeight,
      1,
      1600
    );
    camera.position.set(0, 0, 360);

    const net = new THREE.Group();
    scene.add(net);

    // --- Node data ----------------------------------------------------------
    let seed = 20260529;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const nodePos = new Float32Array(NODES * 3);
    const nodeVel = new Float32Array(NODES * 3);
    const nodeColor = new Float32Array(NODES * 3);
    const nodeScale = new Float32Array(NODES);
    const nodeColors = [];

    for (let i = 0; i < NODES; i++) {
      const i3 = i * 3;
      nodePos[i3] = (rand() - 0.5) * 2 * BOUNDS.x;
      nodePos[i3 + 1] = (rand() - 0.5) * 2 * BOUNDS.y;
      nodePos[i3 + 2] = (rand() - 0.5) * 2 * BOUNDS.z;

      const speed = prefersReduced ? 0 : 1;
      nodeVel[i3] = (rand() - 0.5) * 0.32 * speed;
      nodeVel[i3 + 1] = (rand() - 0.5) * 0.32 * speed;
      nodeVel[i3 + 2] = (rand() - 0.5) * 0.32 * speed;

      const c = PALETTE[Math.floor(rand() * PALETTE.length)];
      nodeColors.push(c);
      nodeColor[i3] = c.r;
      nodeColor[i3 + 1] = c.g;
      nodeColor[i3 + 2] = c.b;
      nodeScale[i] = 0.7 + rand() * 1.8;
    }

    // --- Node points --------------------------------------------------------
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePos, 3));
    nodeGeo.setAttribute('aColor', new THREE.BufferAttribute(nodeColor, 3));
    nodeGeo.setAttribute('aScale', new THREE.BufferAttribute(nodeScale, 1));
    const nodeMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: isDark ? 20 : 16 },
        uPixelRatio: { value: pr },
        uDark: { value: isDark ? 1 : 0 },
      },
      vertexShader: NODE_VERT,
      fragmentShader: NODE_FRAG,
      transparent: true,
      depthWrite: false,
      blending,
    });
    const points = new THREE.Points(nodeGeo, nodeMat);
    net.add(points);

    // --- Connection lines (rebuilt each frame) ------------------------------
    const linePos = new Float32Array(MAX_LINKS * 2 * 3);
    const lineCol = new Float32Array(MAX_LINKS * 2 * 3);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineCol, 3));
    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending,
      opacity: isDark ? 0.9 : 0.7,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    net.add(lines);

    // --- Distant ambient glow blobs (dark mode only — additive) -------------
    let hazeGeo, hazeMat;
    if (isDark) {
      hazeGeo = new THREE.BufferGeometry();
      const HAZE = 10;
      const hazePos = new Float32Array(HAZE * 3);
      const hazeColor = new Float32Array(HAZE * 3);
      const hazeScale = new Float32Array(HAZE);
      for (let i = 0; i < HAZE; i++) {
        hazePos[i * 3] = (rand() - 0.5) * 900;
        hazePos[i * 3 + 1] = (rand() - 0.5) * 500;
        hazePos[i * 3 + 2] = -150 - rand() * 350;
        const c = PALETTE[Math.floor(rand() * 3)];
        hazeColor[i * 3] = c.r;
        hazeColor[i * 3 + 1] = c.g;
        hazeColor[i * 3 + 2] = c.b;
        hazeScale[i] = 60 + rand() * 90;
      }
      hazeGeo.setAttribute('position', new THREE.BufferAttribute(hazePos, 3));
      hazeGeo.setAttribute('aColor', new THREE.BufferAttribute(hazeColor, 3));
      hazeGeo.setAttribute('aScale', new THREE.BufferAttribute(hazeScale, 1));
      hazeMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uSize: { value: 30 }, uPixelRatio: { value: pr }, uDark: { value: 1 } },
        vertexShader: NODE_VERT,
        fragmentShader: NODE_FRAG,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0.25,
      });
      const haze = new THREE.Points(hazeGeo, hazeMat);
      haze.renderOrder = -1;
      net.add(haze);
    }

    // --- Interaction --------------------------------------------------------
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const scroll = { y: 0 };
    const onPointerMove = (e) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => { scroll.y = window.scrollY || 0; };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // --- Animation loop -----------------------------------------------------
    const clock = new THREE.Clock();
    let rafId;
    let running = true;
    const linkDistSq = LINK_DIST * LINK_DIST;

    const tick = () => {
      const elapsed = clock.getElapsedTime();
      nodeMat.uniforms.uTime.value = elapsed;
      if (hazeMat) hazeMat.uniforms.uTime.value = elapsed;

      if (!prefersReduced) {
        for (let i = 0; i < NODES; i++) {
          const i3 = i * 3;
          nodePos[i3] += nodeVel[i3];
          nodePos[i3 + 1] += nodeVel[i3 + 1];
          nodePos[i3 + 2] += nodeVel[i3 + 2];
          if (nodePos[i3] > BOUNDS.x || nodePos[i3] < -BOUNDS.x) nodeVel[i3] *= -1;
          if (nodePos[i3 + 1] > BOUNDS.y || nodePos[i3 + 1] < -BOUNDS.y) nodeVel[i3 + 1] *= -1;
          if (nodePos[i3 + 2] > BOUNDS.z || nodePos[i3 + 2] < -BOUNDS.z) nodeVel[i3 + 2] *= -1;
        }
        nodeGeo.attributes.position.needsUpdate = true;
      }

      // Rebuild connection lines for nearby node pairs.
      let v = 0;
      for (let i = 0; i < NODES; i++) {
        const i3 = i * 3;
        const ax = nodePos[i3], ay = nodePos[i3 + 1], az = nodePos[i3 + 2];
        for (let j = i + 1; j < NODES; j++) {
          const j3 = j * 3;
          const dx = ax - nodePos[j3];
          const dy = ay - nodePos[j3 + 1];
          const dz = az - nodePos[j3 + 2];
          const dSq = dx * dx + dy * dy + dz * dz;
          if (dSq < linkDistSq && v < MAX_LINKS * 2) {
            const t = 1 - Math.sqrt(dSq) / LINK_DIST;
            const ca = nodeColors[i], cb = nodeColors[j];
            const p = v * 3;
            // dark: fade to black (c*t). light: fade toward the light bg.
            linePos[p] = ax; linePos[p + 1] = ay; linePos[p + 2] = az;
            lineCol[p] = fadeColor.r * (1 - t) + ca.r * t;
            lineCol[p + 1] = fadeColor.g * (1 - t) + ca.g * t;
            lineCol[p + 2] = fadeColor.b * (1 - t) + ca.b * t;
            const q = (v + 1) * 3;
            linePos[q] = nodePos[j3]; linePos[q + 1] = nodePos[j3 + 1]; linePos[q + 2] = nodePos[j3 + 2];
            lineCol[q] = fadeColor.r * (1 - t) + cb.r * t;
            lineCol[q + 1] = fadeColor.g * (1 - t) + cb.g * t;
            lineCol[q + 2] = fadeColor.b * (1 - t) + cb.b * t;
            v += 2;
          }
        }
      }
      lineGeo.setDrawRange(0, v);
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.color.needsUpdate = true;

      if (!prefersReduced) {
        net.rotation.y = elapsed * 0.02;
        net.rotation.x = Math.sin(elapsed * 0.04) * 0.06;
      }

      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;
      camera.position.x += (pointer.x * 55 - camera.position.x) * 0.05;
      camera.position.y += (-pointer.y * 45 - camera.position.y) * 0.05;
      const targetZ = 360 - Math.min(scroll.y * 0.045, 130);
      camera.position.z += (targetZ - camera.position.z) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };
    tick();

    const onVisibility = () => {
      if (document.hidden && running) {
        cancelAnimationFrame(rafId);
        running = false;
      } else if (!document.hidden && !running) {
        running = true;
        clock.getDelta();
        tick();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    // --- Cleanup ------------------------------------------------------------
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      nodeGeo.dispose();
      nodeMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      if (hazeGeo) hazeGeo.dispose();
      if (hazeMat) hazeMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [darkMode]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ contain: 'strict' }}
    />
  );
};

export default ParticleUniverse;
