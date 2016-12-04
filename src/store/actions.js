import { createAction } from 'vuex-actions';

export default {
  /*
  * Projects
  */
  updateProject: createAction('UPDATE_PROJECT'),

  /*
  * Pages
  */
  createPage: createAction('CREATE_PAGE'),
  deletePage: createAction('DELETE_PAGE'),
  updatePage: createAction('UPDATE_PAGE'),

  /*
  * Rows
  */
  createRow: createAction('CREATE_ROW'),
  deleteRow: createAction('DELETE_ROW'),
  updateRow: createAction('UPDATE_ROW'),

  /*
  * Blocks
  */
  createBlock: createAction('CREATE_BLOCK'),
  deleteBlock: createAction('DELETE_BLOCK'),
  updateBlock: createAction('UPDATE_BLOCK'),

  /*
  * Size Dialog
  */
  showDialog: createAction('SHOW_DIALOG'),
  hideDialog: createAction('HIDE_DIALOG'),
};
