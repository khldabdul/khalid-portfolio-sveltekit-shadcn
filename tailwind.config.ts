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
        
        // Enhanced color palette
        'warm-amber': {
          50: '#FEF7ED',
          100: '#FEF0DD',
          200: '#FCD9B6',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F59E0B', // Primary amber
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F'
        },
        
        'electric-green': {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // Primary green
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B'
        },
        
        'complementary-blue': {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // Primary blue
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A'
        },
        
        'complementary-purple': {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6', // Primary purple
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95'
        },
        
        // Neutral warm and cool palettes
        'warm-neutral': {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917'
        },
        
        'cool-neutral': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A'
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
      },
      animation: {
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.5)' },
          '100%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.8)' }
        }
      }
    }
  },
  plugins: [
    typography,
    forms,
    containerQueries,
    // Enhanced brutalist plugin
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
        },
        '.gradient-text': {
          background: `linear-gradient(135deg, ${theme('colors.primary.DEFAULT')}, ${theme('colors.accent.DEFAULT')})`,
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent'
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
          transition: 'all 0.2s ease',
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
          transition: 'all 0.2s ease',
          '&:hover': {
            background: theme('colors.foreground'),
            color: theme('colors.background')
          }
        },
        '.btn-brutalist-accent': {
          background: theme('colors.accent.DEFAULT'),
          color: theme('colors.accent.foreground'),
          border: `2px solid ${theme('colors.accent.DEFAULT')}`,
          padding: `${theme('spacing.4')} ${theme('spacing.8')}`,
          'font-weight': '700',
          'text-transform': 'uppercase',
          'letter-spacing': '0.05em',
          cursor: 'pointer',
          'border-radius': '0',
          transition: 'all 0.2s ease',
          '&:hover': {
            background: theme('colors.background'),
            color: theme('colors.accent.DEFAULT')
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