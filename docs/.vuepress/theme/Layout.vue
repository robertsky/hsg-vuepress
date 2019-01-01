<template>
<div class="wrapper">
  <div id="fb-root"></div>
	<NavBar/>
	<HeroBanner/>
    <div class="markdown-body m-10 rounded">

      <component :is="layout"></component>
      <Footer/>
    </div>
</div>
</template>
<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import HeroBanner from './components/HeroBanner.vue';
import HomeLayout from './layouts/HomeLayout.vue';
import PageLayout from './layouts/PageLayout.vue';
//import BlogLayout from './layouts/BlogLayout.vue';
//import MembershipLayout from './layouts/MembershipLayout.vue';
//import PageLayout from './layouts/PageLayout.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  components: { NavBar, Footer, HeroBanner, HomeLayout, PageLayout },
  computed: {
      layout() {
      return this.$page.frontmatter.layout || 'PageLayout'
      }
  },
  created: function() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2&appId=163854234174514&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}
</script>
<style lang="scss">
    @import './styles/theme.scss';
</style>
