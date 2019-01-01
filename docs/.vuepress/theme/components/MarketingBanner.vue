<template>
<b-jumbotron class="marketing-banner"
  :header="header"
  :lead="lead"
>
  <p>
    {{text}}
  </p>
  <b-btn variant="primary" href="#">Do Something</b-btn>
  <b-btn variant="success" href="#">Do Something Else</b-btn>
</b-jumbotron>
</template>
<script>
import { Jumbotron } from 'bootstrap-vue/es/components';
export default {
    name: 'MarketingBanner',
    components: { Jumbotron },
    props: {
      header: {
        default: 'Join our vibrant community'
      },
      lead: {
        default: 'HackerspaceSG is founded on the premise of open sharing of knowledge for the community by the community.'
      },
      text: {
        default: 'We are looking for likeminded public to join us as members and support the community space.'
      }
    },
}

</script>
<style type="stylus">
.marketing-banner {
  background: url(https://hackerspace.sg/imgs/index.jpg);
  background-size: cover;
  background-color: rgba(255,255,255,0.7) !important;
  background-blend-mode: overlay;
}
</style>
