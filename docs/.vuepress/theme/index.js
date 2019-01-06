module.exports = {
  plugins: [
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.table-of-contents > ul > li > a',
      headerTopOffset: 70
    }]
  ]
}
