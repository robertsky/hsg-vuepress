<template>
  <b-container class="upcoming-events-container">
    <h2>Upcoming Events</h2>
    <div class="upcoming-events-row">
      <b-row v-for="data in upcomingEvents" class="upcoming-events-row" :key="data.id">
        <b-card v-bind:header="data.Name"
                header-tag="h4"
                v-bind:img-src="!!data.PreviewImg ? data.PreviewImg : 'https://picsum.photos/600/300/?image=25'"
                v-bind:img-alt="data.Name"
                img-top
                class="sm-12"
                border-variant="dark"
                footer-tag="footer"
                >
          <p class="card-text">
            <b-form-row>
              <b-col cols="3">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Calendar" role="img" viewBox="0 0 512 512">
                <rect width="512" height="512" rx="77" fill="#dee" />
                <path d="m77 0h358a77 77 0 0 1 77 77v103h-512v-103a77 77 0 0 1 77-77z" fill="#d34" />
                <g fill="#677" font-family="monospace" text-anchor="middle"><text fill="#fff" font-size="110" x="260" y="154" id="m">{{data.When | moment('MMM/YYYY') | uppercase}}</text><text font-size="256" x="256" y="400" id="d">{{data.When | moment('DD') }}</text><text font-size="64" x="256" y="480" id="w">{{data.When | moment('dddd') }}</text></g>
              </svg>
              </b-col>
              <b-col cols="9">
                {{data.Description | ellipsize140}}
              </b-col>
            </b-form-row>
          </p>
          <b-button v-bind:href="data.URL" variant="primary">Check out the event</b-button>
          <em slot="footer">Happening {{data.When | moment("from", "now")}}</em>
        </b-card>
      </b-row>
    </div>
  </b-container>
</template>
<script>
import { Layout, Card, Tooltip } from 'bootstrap-vue/es/components';
import newEvents from '../../public/data/events.json';
import ellipsize from 'ellipsize';
import axios from 'axios';
export default {
    name: 'UpcomingEvents',
    components: { Layout, Card },
    data: function() {
      return {
        upcomingEvents: {}
      }
    },
    mounted: function() {
      const newEventsKeys = Object.keys(newEvents);
      for (var i = newEventsKeys.length - 1; i >= 0; i--) {
        var key = newEventsKeys[i];
        if (!!newEvents[key].URL) {
          axios.get('https://api.microlink.io/?url='+newEvents[key].URL)
            .then(response => {
              if(!!response.status && response.status === 200 && !!response.data && !!response.data.status && response.data.status === 'success') {
                if (!!response.data.data.image) {
                  this.$set(newEvents[key], 'PreviewImg', response.data.data.image.url);
                }
                if (!!response.data.data.description) {
                  this.$set(newEvents[key], 'Description', response.data.data.description);
                }
              }
              this.upcomingEvents = newEvents;
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    },
    filters: {
      ellipsize140: function(string) {
        return ellipsize(string, 140);
      }
    }
}

</script>
<style type="stylus">
.upcoming-events-row {
  padding-bottom: 1em;
}
.upcoming-events-row .card .card-img-top {
  height:150px;
  object-fit:cover;
}
</style>
