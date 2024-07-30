/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'body-bg': '#2A2438',
      'nav-bg': 'rgba(42, 36, 56, 0.9)',
      'section-bg': '#352F44',
      'accent1': '#DBD8E3',
      'unfocused': 'rgba(219, 216, 227, 0.4)',
      'hover-skill': 'rgba(145, 109, 213, 0.15)',
      'hover-nav': 'rgba(219, 216, 227, 0.7)',
      'accent2': 'rgb(145, 109, 213)',
      'skill-alt': 'rgb(173, 141, 235)'
    },
    fontFamily: {
      'primary': ['Poppins', 'sans-serif']
    },
    extend: {
      width: {
        'big-screen': '1005px'
      }
    },
    plugins: [],
  }
}

