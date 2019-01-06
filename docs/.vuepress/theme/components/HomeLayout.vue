<template>
<b-container class="home-layout">
    <MarketingBanner/>
    <b-row>
        <b-col md="6" sm="12">
            <UpcomingEvents/>
        </b-col>
        <b-col md="6" sm="12">
            <SocialMedia/>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import Timeline from 'vue-tweet-embed/timeline';
import MarketingBanner from './MarketingBanner.vue';
import UpcomingEvents from './UpcomingEvents.vue';
import SocialMedia from './SocialMedia.vue';
import { Layout } from 'bootstrap-vue/es/components';
export default {
    name: 'HomeLayout',
    components: { Layout, MarketingBanner, UpcomingEvents, Timeline, SocialMedia }
}
</script>
