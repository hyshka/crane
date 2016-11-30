// Disable this rule for this file only
/* eslint-disable no-param-reassign */
export default {
  /*
  * Size Dialog
  */
  SHOW_DIALOG(state) {
    console.log('show dialog');
    state.dialog.isOpen = true;
  },

  HIDE_DIALOG(state) {
    console.log('hide dialog');
    state.dialog.isOpen = false;
  },

  /*
  * Blocks
  */
  ADD_BLOCK(state, data) {
    console.log('add block', data);
    state.dialog.isOpen = false;
    state.blocks.push(data);
  },
};
