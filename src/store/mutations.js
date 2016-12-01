// import { createAction, handleAction, handleMutations, $inject } from 'vuex-actions';
import { handleMutations } from 'vuex-actions';

// Disable this rule for this file only
/* eslint-disable no-param-reassign */
export default handleMutations({

  /*
  * Size Dialog
  */
  SHOW_DIALOG: (state) => {
    console.log('show dialog');
    state.dialog.isOpen = true;
  },

  HIDE_DIALOG: (state) => {
    console.log('hide dialog');
    state.dialog.isOpen = false;
  },

  /*
  * Blocks
  */
  ADD_BLOCK: (state, mutation) => {
    console.log('add block', mutation);
    state.dialog.isOpen = false;
    state.blocks.push(mutation);
  },
});
