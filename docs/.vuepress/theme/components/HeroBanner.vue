<template>
<div class="jumbotron hsg-header">
  <div class="highlight">
    <img alt="Welcome to Hackerspace Singapore" class="banner" src="/img/banner.png">
  </div>
</div>
</template>
<script>
import { Jumbotron } from 'bootstrap-vue/es/components';
export default {
    name: 'HeroBanner',
    components: { Jumbotron }
}

</script>
<style type="stylus">
  .hsg-header {
    padding: 2em;
    text-align: center;
    width: 100%;
    background: transparent 50% 50% no-repeat url(https://s3-ap-southeast-1.amazonaws.com/cam.hackerspace.sg/latest.jpg);
    background-size: cover;
  }
  .hsg-header h1 {
    margin: 0;
  }
  @media screen and (max-width: 900px) {
    .hsg-header img.banner {
      width: 100%;
    }
  }
  .hsg-header .highlight{
    background-color: rgba(255, 255, 255, 0.4);
    padding: 1em;
  }
</style>
