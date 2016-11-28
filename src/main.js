import Vue from 'vue';
import store from 'store/index';
import App from './App';

/* eslint-disable no-new */
new Vue({
  store, // inject store to all children
  el: '#app',
  template: '<App/>',
  components: { App },
});
