// Disable this rule for this file only
/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
// import mutations from 'store/mutations';
// import state from 'store/state';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
Vue.config.debug = debug;

const state = {
  dialog: {
    isOpen: false,
  },
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
};

const mutations = {
  showDialog() {
    console.log('show dialog');
    state.dialog.isOpen = true;
  },
  hideDialog() {
    console.log('hide dialog');
    state.dialog.isOpen = false;
  },
  addBlock() {
    console.log('add block');
    state.blocks.push(
      {
        title: 'Footer',
        size: 'small',
      },
    );
  },
};

const actions = {
  showDialog: ({ commit }) => commit('showDialog'),
  hideDialog: ({ commit }) => commit('hideDialog'),
  addBlock: ({ commit }) => commit('addBlock'),
};

const getters = {
  blocks: () => state.blocks,
  dialogIsOpen: () => state.dialog.isOpen,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
