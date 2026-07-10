/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: '#0a0a0f',
        panel: '#0d1424',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        display: ['Anton', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(34, 211, 238, 0.3)',
        glow: '0 0 25px -5px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 45px -8px rgba(59, 130, 246, 0.55)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
