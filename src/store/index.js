import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import mutations from 'store/mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
Vue.config.debug = debug;

export default new Vuex.Store({
  state: {
    showDialog: false,
    blocks: [
      {
        title: 'Banner Image w/ Primary Message & CTA',
        size: 'large',
      },
      {
        title: 'Services',
        size: 'medium',
      },
      {
        title: 'About Us',
        size: 'medium',
      },
      {
        title: 'Resources / Updates / News',
        size: 'medium',
      },
      {
        title: 'Contact CTA',
        size: 'small',
      },
      {
        title: 'Footer',
        size: 'small',
      },
    ],
  },
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
