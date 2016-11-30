export default {
  /*
  * Size Dialog
  */
  showDialog({ commit }) {
    commit('SHOW_DIALOG');
  },
  hideDialog({ commit }) {
    commit('HIDE_DIALOG');
  },

  /*
  * Blocks
  */
  addBlock({ commit }) {
    commit('ADD_BLOCK');
  },
};
