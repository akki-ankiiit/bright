/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#2ECC71',
        'brand-secondary': '#27AE60',
        'brand-navy': '#1A3A52',
        'brand-navy-accent': '#2C5282',
        'brand-bg': '#F8FAFB',
        'brand-text': '#1A1A1A',
        'brand-text-secondary': '#555555',
        'brand-success': '#16A34A',
        'brand-border': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      keyframes: {
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
}
