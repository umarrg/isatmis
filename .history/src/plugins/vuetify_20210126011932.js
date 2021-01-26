import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
Vue.component('mapbox', require('mapbox-gl-vue/src/components/Mapbox.vue'));

export default new Vuetify({
});
