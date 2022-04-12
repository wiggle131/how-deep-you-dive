module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
        'Open-Sans': ["Open Sans", "sans-serif"]
      },
      textFillColor: theme => theme('borderColor'),
      textStrokeColor: theme => theme('borderColor'),
      textStrokeWidth: theme => theme('borderWidth'),
      paintOrder: {
        'fsm': { paintOrder: 'fill stroke markers' },
        'fms': { paintOrder: 'fill markers stroke' },
        'sfm': { paintOrder: 'stroke fill markers' },
        'smf': { paintOrder: 'stroke markers fill' },
        'mfs': { paintOrder: 'markers fill stroke' },
        'msf': { paintOrder: 'markers stroke fill' },
      },
    },

     
    variants: { // all the following default to ['responsive']
      textFillColor: ['responsive'],
      textStrokeColor: ['responsive'],
      textStrokeWidth: ['responsive'],
      paintOrder: ['responsive'],
    },

  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
    require('tw-elements/dist/plugin')
  ],
}
