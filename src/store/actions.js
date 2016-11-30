// function makeAction(type) {
//   return ({ dispatch }, ...args) => dispatch(type, ...args);
// }

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
  addBlock({ commit }, data) {
    commit('ADD_BLOCK', data);
  },
};

// export const setMessage = makeAction('SET_MESSAGE');
