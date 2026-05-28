import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#7B1C1C',
          light: '#9E2A2A',
          deep: '#5A1414',
          muted: '#A04040',
        },
        gold: {
          DEFAULT: '#B8960C',
          light: '#D4B44A',
          pale: '#E8D4A0',
          bright: '#D4A017',
          warm: '#C9920A',
        },
        ivory: {
          DEFAULT: '#F8F3EA',
          dark: '#EDE8DA',
          muted: '#D8D0BF',
        },
        emerald: {
          DEFAULT: '#1B3A28',
          light: '#2A5038',
        },
        'near-black': '#0C0906',
        charcoal: '#1A1510',
        'warm-grey': '#3A332A',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', ...fontFamily.serif],
        sans: ['var(--font-dm-sans)', ...fontFamily.sans],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem,9vw,7rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.8rem,6vw,5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem,4vw,3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.6rem,3vw,2.5rem)', { lineHeight: '1.2' }],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, #B8960C 0%, #E8D4A0 30%, #FFE9A8 50%, #E8D4A0 70%, #B8960C 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #5A1414 0%, #7B1C1C 50%, #9E2A2A 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(12,9,6,0) 0%, rgba(12,9,6,0.6) 50%, rgba(12,9,6,0.95) 100%)',
        'dark-vignette': 'radial-gradient(ellipse at center, rgba(12,9,6,0) 30%, rgba(12,9,6,0.7) 100%)',
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        'ken-burns': 'kenBurns 12s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.8s ease forwards',
        float: 'float 4s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.6s ease forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.08) translate(-1%, -0.5%)' },
          '100%': { transform: 'scale(1.05) translate(1%, 0.5%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(184,150,12,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(184,150,12,0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'gold-sm': '0 2px 20px rgba(184,150,12,0.15)',
        'gold-md': '0 4px 40px rgba(184,150,12,0.2)',
        'gold-lg': '0 8px 60px rgba(184,150,12,0.25)',
        'crimson-md': '0 4px 40px rgba(123,28,28,0.3)',
        luxury: '0 20px 80px rgba(12,9,6,0.6)',
      },
    },
  },
  plugins: [],
}

export default config
