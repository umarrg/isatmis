import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import mapbox emailRules: [
  v => !!v || 'E-mail is required',
  v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
]

Vue.config.productionTip = false,
Vue.component('mapbox', require('mapbox-gl-vue/src/components/Mapbox.vue'));


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
