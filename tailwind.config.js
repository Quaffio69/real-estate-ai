/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2196F3',
        secondary: '#4CAF50',
        accent: '#81D4FA',
        success: '#66BB6A',
        background: '#F5F9FF',
        text: '#2C3E50',
        'text-light': '#70809A',
        border: '#E3F2FD',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(33, 150, 243, 0.1)',
        'md': '0 4px 6px rgba(33, 150, 243, 0.15)',
        'lg': '0 8px 16px rgba(33, 150, 243, 0.2)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      }
    },
  },
  plugins: [],
}

