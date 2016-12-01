// import { createAction, handleAction, handleMutations, $inject } from 'vuex-actions';
import { createAction } from 'vuex-actions';
// function makeAction(type) {
//   return ({ dispatch }, ...args) => dispatch(type, ...args);
// }

export default {
  /*
  * Size Dialog
  */
  showDialog: createAction('SHOW_DIALOG'),
  hideDialog: createAction('HIDE_DIALOG'),
  // showDialog({ commit }) {
  //   commit('SHOW_DIALOG');
  // },
  // hideDialog({ commit }) {
  //   commit('HIDE_DIALOG');
  // },

  /*
  * Blocks
  */
  addBlock: createAction('ADD_BLOCK'),
  // addBlock({ commit }, data) {
  //   commit('ADD_BLOCK', data);
  // },
};

// export const setMessage = makeAction('SET_MESSAGE');
