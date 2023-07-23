/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      'black': '#3B434E',
      'white': '#FFFFFF',
      'primary': '#7653FC',
      'primary-hover': '#6848CE',
      'red': '#FC836D',
      'green': '#1DC37E',
      'green-light': '#C8F8E4',
      'gray-light': '#EBEBEB'
    }
  },
  plugins: []
};
