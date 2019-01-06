<template>
<div class="wrapper">
  <div id="fb-root"></div>
	<NavBar/>
  <div class="main-body">
	<HeroBanner/>
  <HomeLayout v-if="layout === 'home'" />
  <PageLayout v-else-if="layout === 'page'" />
  <Footer/>
  </div>
</div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import HeroBanner from '../components/HeroBanner.vue';
import HomeLayout from '../components/HomeLayout.vue';
import PageLayout from '../components/PageLayout.vue';
//import BlogLayout from '../components/BlogLayout.vue';
//import MembershipLayout from '../components/MembershipLayout.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  components: { NavBar, Footer, HeroBanner, HomeLayout, PageLayout },
  computed: {
      layout() {
      return this.$page.frontmatter.pagetype || 'page'
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
<style lang="stylus">
.main-body {
  top: 200px;
}
</style>
