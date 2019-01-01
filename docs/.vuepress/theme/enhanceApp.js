import BootstrapVue from "bootstrap-vue";
import VueMoment from "vue-moment";
export default ({
  Vue
}) => {
  Vue.use(BootstrapVue);
  Vue.use(require('vue-moment'));
  Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  });
  Vue.filter('uppercase', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.toUpperCase()
  });

}
