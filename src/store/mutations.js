// Disable this rule for this file only
/* eslint-disable no-param-reassign */
export default {

  /*
  * Blocks
  */
  ADD_BLOCK(state) {
    state.blocks.push(
      {
        title: 'Footer',
        size: 'small',
      },
    );
  },

  /*
  * Size Dialog
  */
  SHOW_DIALOG(state) {
    state.showDialog = true;
  },

  HIDE_DIALOG(state) {
    state.showDialog = false;
  },
};
