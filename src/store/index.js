// Disable this rule for this file only
/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import state from 'store/state';
import actions from 'store/actions';
import mutations from 'store/mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
Vue.config.debug = debug;

const getters = {
  // blocks: () => state.blocks,
  // dialogIsOpen: () => state.dialog.isOpen,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
