<template>
  <b-container class="upcoming-events-container">
    <h2>Our Social Activities</h2>
    <b-tabs>
      <b-tab title="Facebook" active>
        <br>
        <div class="fb-page" data-width="600px" data-href="https://www.facebook.com/HackerspaceSG/" data-tabs="timeline,events,messages" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/HackerspaceSG/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/HackerspaceSG/">HackerspaceSG</a></blockquote></div>
      </b-tab>
      <b-tab title="Twitter" >
        <br>
        <Timeline :id="'hackerspacesg'" :sourceType="'profile'" :options="{ tweetLimit: '3' }"/>
      </b-tab>
    </b-tabs>
  </b-container>
</template>
<script>
import Timeline from 'vue-tweet-embed/timeline'
import { Layout, Card, Tabs } from 'bootstrap-vue/es/components';
export default {
    name: 'SocialMedia',
    components: { Layout, Card, Timeline }
}

</script>
<style type="stylus">
.upcoming-events-row {}
</style>
