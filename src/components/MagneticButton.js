import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticButton = ({ children, strength = 0.3, className = '', as: Tag = 'button', ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 20, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 250, damping: 20, mass: 0.3 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  const MotionTag = motion[Tag] || motion.button;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default MagneticButton;
