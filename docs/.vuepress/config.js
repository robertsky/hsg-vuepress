const path = require('path');

module.exports = {
  title: 'HackerspaceSG',
  description: 'Singapore\'s first kiasu-free zone',
  themeConfig: {
    logo: '/img/crest.png'
  },
  postcss: {
    plugins: [
      //require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
}
