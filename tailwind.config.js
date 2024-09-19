/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': 'rgb(20, 22, 25)',
      'card': '#292d33', /** #2c2e3a  #292d33 */
      'accent1': '#DBD8E3', /** #DBD8E3 */
      'unfocused': 'rgba(219, 216, 227, 0.4)',
      'hover-skill': 'rgba(145, 109, 213, 0.15)',
      'hover-nav': 'rgba(219, 216, 227, 0.7)',
      'accent2': '#8860d0', /** rgb(145, 109, 213) */
      'skill-alt': 'rgb(173, 141, 235)',
      'error': '#DC4523',
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

