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
  ADD_BLOCK(state) {
    console.log('add block');
    state.blocks.push(
      {
        title: 'Footer',
        size: 'small',
      },
    );
  },
};
