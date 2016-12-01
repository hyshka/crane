import { createAction } from 'vuex-actions';

export default {
  /*
  * Size Dialog
  */
  showDialog: createAction('SHOW_DIALOG'),
  hideDialog: createAction('HIDE_DIALOG'),

  /*
  * Blocks
  */
  addBlock: createAction('ADD_BLOCK'),
};
