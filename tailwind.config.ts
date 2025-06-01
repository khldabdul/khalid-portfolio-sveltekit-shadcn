import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Enhanced brutalist color system
        'pure-white': '#FCFCFC',
        'pure-black': '#0F0F0F',
        'electric-green': '#00FF00',
        'warm-amber': '#F59E0B',
        'brutalist-gray': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717'
        }
      },
      borderRadius: {
        'none': '0',
        'brutalist': '0'
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif'
        ],
        brutalist: [
          'Arial',
          'Helvetica',
          'sans-serif'
        ]
      },
      fontSize: {
        'brutalist-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
        'brutalist-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '500' }],
        'brutalist-base': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'brutalist-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'brutalist-xl': ['1.25rem', { lineHeight: '1.6', fontWeight: '600' }],
        'brutalist-2xl': ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
        'brutalist-3xl': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        'brutalist-4xl': ['2.25rem', { lineHeight: '1.2', fontWeight: '800' }],
        'brutalist-5xl': ['3rem', { lineHeight: '1.1', fontWeight: '800' }],
        'brutalist-6xl': ['3.75rem', { lineHeight: '1', fontWeight: '900' }],
        'brutalist-7xl': ['4.5rem', { lineHeight: '0.9', fontWeight: '900' }],
        'brutalist-8xl': ['6rem', { lineHeight: '0.9', fontWeight: '900' }],
        'brutalist-9xl': ['8rem', { lineHeight: '0.8', fontWeight: '900' }]
      },
      spacing: {
        'brutalist-xs': '0.5rem',
        'brutalist-sm': '1rem',
        'brutalist-md': '2rem',
        'brutalist-lg': '3rem',
        'brutalist-xl': '4rem',
        'brutalist-2xl': '6rem',
        'brutalist-3xl': '8rem'
      },
      letterSpacing: {
        'brutalist-tight': '-0.05em',
        'brutalist-normal': '0em',
        'brutalist-wide': '0.05em',
        'brutalist-wider': '0.1em'
      },
      borderWidth: {
        'brutalist': '2px',
        'brutalist-thick': '4px',
        'brutalist-heavy': '6px'
      },
      maxWidth: {
        'brutalist-content': '65ch',
        'brutalist-reading': '75ch'
      }
    }
  },
  plugins: [
    typography,
    forms,
    containerQueries,
    // Custom brutalist plugin
    function({ addUtilities, addComponents, theme }) {
      const brutalistUtilities = {
        '.no-animations': {
          '*, *::before, *::after': {
            'animation-duration': '0s !important',
            'animation-delay': '0s !important',
            'transition-duration': '0s !important',
            'transition-delay': '0s !important'
          }
        },
        '.force-square': {
          'border-radius': '0 !important'
        },
        '.brutalist-focus': {
          '&:focus': {
            outline: `3px solid ${theme('colors.primary.DEFAULT')}`,
            'outline-offset': '2px'
          }
        },
        '.brutalist-underline': {
          'text-decoration': 'underline',
          'text-decoration-thickness': '2px',
          'text-underline-offset': '4px'
        },
        '.asymmetric-grid': {
          display: 'grid',
          'grid-template-columns': '2fr 1fr',
          gap: theme('spacing.8'),
          '@media (max-width: 768px)': {
            'grid-template-columns': '1fr',
            gap: theme('spacing.4')
          }
        },
        '.asymmetric-grid-reverse': {
          display: 'grid',
          'grid-template-columns': '1fr 2fr',
          gap: theme('spacing.8'),
          '@media (max-width: 768px)': {
            'grid-template-columns': '1fr',
            gap: theme('spacing.4')
          }
        }
      }

      const brutalistComponents = {
        '.btn-brutalist': {
          background: theme('colors.primary.DEFAULT'),
          color: theme('colors.primary.foreground'),
          border: `2px solid ${theme('colors.primary.DEFAULT')}`,
          padding: `${theme('spacing.4')} ${theme('spacing.8')}`,
          'font-weight': '700',
          'text-transform': 'uppercase',
          'letter-spacing': '0.05em',
          cursor: 'pointer',
          'border-radius': '0',
          '&:hover': {
            background: theme('colors.background'),
            color: theme('colors.primary.DEFAULT')
          }
        },
        '.btn-brutalist-secondary': {
          background: theme('colors.background'),
          color: theme('colors.foreground'),
          border: `2px solid ${theme('colors.border')}`,
          padding: `${theme('spacing.4')} ${theme('spacing.8')}`,
          'font-weight': '700',
          'text-transform': 'uppercase',
          'letter-spacing': '0.05em',
          cursor: 'pointer',
          'border-radius': '0',
          '&:hover': {
            background: theme('colors.foreground'),
            color: theme('colors.background')
          }
        },
        '.card-brutalist': {
          background: theme('colors.card.DEFAULT'),
          border: `2px solid ${theme('colors.border')}`,
          padding: theme('spacing.8'),
          'border-radius': '0'
        },
        '.card-brutalist-inverse': {
          background: theme('colors.foreground'),
          color: theme('colors.background'),
          border: `2px solid ${theme('colors.border')}`,
          padding: theme('spacing.8'),
          'border-radius': '0'
        }
      }

      addUtilities(brutalistUtilities)
      addComponents(brutalistComponents)
    }
  ]
} satisfies Config;