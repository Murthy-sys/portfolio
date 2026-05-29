/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep obsidian base for a refined, professional look
        ink: {
          50:  '#f6f6f7',
          100: '#e6e6e9',
          200: '#c9c9cf',
          300: '#a1a1ab',
          400: '#6e6e7a',
          500: '#4a4a55',
          600: '#32323b',
          700: '#23232b',
          800: '#17171d',
          900: '#0e0e13',
          950: '#07070a',
        },
        // Indigo / violet primary accent
        brand: {
          50:  '#eef0ff',
          100: '#dde1ff',
          200: '#bdc3ff',
          300: '#9ba3ff',
          400: '#7c80f7',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#2a2580',
          950: '#1a1852',
        },
        // Warm secondary highlight
        glow: {
          50:  '#fff8eb',
          100: '#ffebc6',
          200: '#ffd488',
          300: '#ffb94a',
          400: '#fba524',
          500: '#f59e0b',
          600: '#d67b06',
          700: '#b15908',
          800: '#8f440d',
          900: '#75380e',
        },
        // Holographic neon accents for the sci-fi layer
        neon: {
          cyan:  '#22d3ee',
          blue:  '#38bdf8',
          violet:'#a855f7',
          pink:  '#e879f9',
          mint:  '#34d399',
        },
      },
      boxShadow: {
        'neon-cyan':   '0 0 20px rgba(34,211,238,0.45), 0 0 4px rgba(34,211,238,0.7)',
        'neon-violet': '0 0 24px rgba(168,85,247,0.45), 0 0 6px rgba(168,85,247,0.6)',
        'holo':        '0 8px 40px -8px rgba(99,102,241,0.45), 0 0 0 1px rgba(255,255,255,0.06) inset',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'gradient-shift': 'gradientShift 8s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'border-spin': 'borderSpin 6s linear infinite',
        'blink': 'blink 1s steps(2) infinite',
        'aurora': 'aurora 18s ease infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'scanline': 'scanline 6s linear infinite',
        'float-y': 'floatY 7s ease-in-out infinite',
        'orbit': 'orbit 16s linear infinite',
        'flicker': 'flicker 5s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        hologram: {
          '0%,100%': { opacity: '0.85', filter: 'hue-rotate(0deg)' },
          '50%':     { opacity: '1',    filter: 'hue-rotate(18deg)' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        orbit: {
          '0%':   { transform: 'rotate(0deg) translateX(var(--orbit-r,120px)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(var(--orbit-r,120px)) rotate(-360deg)' },
        },
        flicker: {
          '0%,19%,21%,55%,57%,100%': { opacity: '1' },
          '20%,56%': { opacity: '0.7' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0) translateX(0)' },
          '50%':     { transform: 'translateY(-24px) translateX(10px)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderSpin: {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-ink':  "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        'grid-light': "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
        'radial-brand': 'radial-gradient(1200px 600px at 50% -10%, rgba(99,102,241,0.18), transparent 60%)',
        'aurora': 'linear-gradient(120deg, rgba(99,102,241,0.25), rgba(34,211,238,0.2) 30%, rgba(232,121,249,0.2) 60%, rgba(99,102,241,0.25))',
        'holo-sheen': 'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.08) 45%, rgba(34,211,238,0.12) 50%, rgba(255,255,255,0.08) 55%, transparent 70%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
