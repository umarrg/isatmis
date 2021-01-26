import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.component('mapbox', require('mapbox-gl-vue/src/components/Mapbox.vue'));

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
