const postcssPresetEnv = require('postcss-preset-env')
const postcssCustomMedia = require('postcss-custom-media');
const postcssGlobalData = require('@csstools/postcss-global-data');
const tailwindcss = require('tailwindcss');
const tailwindcssNesting = require('tailwindcss/nesting');
const postcssUtopia = require('postcss-utopia');


module.exports = {
  plugins: [
    postcssPresetEnv({
      autoprefixer: false,
      stage: 2,
      features: {
        'logical-properties-and-values': false,
        'prefers-color-scheme-query': false,
        'gap-properties': false,
        'custom-properties': false,
        'is-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'color-functional-notation': false,
        'cascade-layers': false,
        'double-position-gradients': false,
        'has-pseudo-class': false,
        'place-properties': false,
        'media-query-ranges': false,
        'custom-media-queries': true,
      }
    }),
    postcssGlobalData({
      files: [
        'src/css/global/custom-media.css'
      ]
    }),
    postcssCustomMedia(),
    tailwindcssNesting(),
    tailwindcss(),
    postcssUtopia({
      minWidth: 400, // Default minimum viewport
      maxWidth: 1200, // Default maximum viewport
    })
  ]
};