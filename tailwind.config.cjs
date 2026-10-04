/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
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
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        brand: {
          50: '#F0F6FF',
          100: '#E0EDFE',
          200: '#B9D8FD',
          300: '#7CB7FB',
          400: '#3892F7',
          500: '#0E74E8',
          600: '#0258C5',
          700: '#03459E',
          800: '#0A2540',
          900: '#0B1E36', // Deep navy matching logo typography
          950: '#060D1A'  // Deep tech midnight background
        },
        accent: {
          DEFAULT: '#00B4D8', // Electric Cyan from logo fold & swoosh
          light: '#38BDF8',
          dark: '#0284C7',
          cyan: '#00D2FF'
        },
        purple: {
          DEFAULT: '#8B5CF6', // Vivid violet/purple from logo diagonal fold & satellite
          light: '#C084FC',
          dark: '#7C3AED',
          deep: '#6D28D9'
        },
        navy: {
          DEFAULT: '#0B1E36',
          dark: '#060D1A',
          light: '#1E3A5F'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite'
      },
      boxShadow: {
        "2xs": "var(--shadow-2xs)",
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        "brand-glow": "0 0 35px -5px rgba(0, 180, 216, 0.35), 0 0 20px -5px rgba(139, 92, 246, 0.25)"
      },
      fontFamily: {
        sans: [
          "'Inter'",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "'Noto Sans'",
          "sans-serif"
        ],
        display: [
          "'Plus Jakarta Sans'",
          "'Inter'",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        serif: [
          "'Lora'",
          "ui-serif",
          "Georgia",
          "Cambria",
          "'Times New Roman'",
          "Times",
          "serif"
        ],
        mono: [
          "'Space Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "'Liberation Mono'",
          "'Courier New'",
          "monospace"
        ]
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};