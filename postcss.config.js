const config = require('./tailwind.config.js');

module.exports = {
  plugins: [
    // require('postcss-import'),
    require('tailwindcss')(config),
    require('autoprefixer'),
    require('postcss-clean')({
      level: 2, // Merge duplicated declarations
    }),
  ],
};
