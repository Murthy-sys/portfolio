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
      },
      keyframes: {
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
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
