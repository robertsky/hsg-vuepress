const path = require('path');

module.exports = {
  title: 'HackerspaceSG',
  description: 'Singapore\'s first kiasu-free zone',
  themeConfig: {
    logo: '/img/crest.png'
  },
  head: [
    ['link', {rel:'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/css/bootstrap.min.css'}],
    ['link', {rel:'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-vue@2.0.0-rc.11/dist/bootstrap-vue.min.css'}]
  ]
}
