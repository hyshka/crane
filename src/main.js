import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import store from 'store/index';
import router from 'router/index';
import App from './App';


sync(store, router);

/* eslint-disable no-new */
new Vue({
  store, // inject store to all children
  router, // pass router + routes
  // el: '#app', // don't know if I need this now with vue-router
  template: '<App/>',
  components: { App },
}).$mount('#app');
