// Disable this rule for this file only
/* eslint-disable no-param-reassign, no-console */
import { handleMutations } from 'vuex-actions';
// import faker from 'faker';


export default handleMutations({
  /*
  * Projects
  */
  UPDATE_PROJECT: (state, mutation) => {
    console.log('update project', mutation);
    state.dialog.isOpen = true;
  },

  /*
  * Pages
  */
  CREATE_PAGE: (state, mutation) => {
    console.log('create page', mutation);
  },
  DELETE_PAGE: (state, mutation) => {
    console.log('delete page', mutation);
  },
  UPDATE_PAGE: (state, mutation) => {
    console.log('update page', mutation);
  },

  /*
  * Rows
  */
  CREATE_ROW: (state, mutation) => {
    console.log('create row', mutation, mutation.index);

    const row = {
      size: mutation.size,
      blocks: [
        {
          title: 'New Row',
        },
      ],
    };

    state.projects[state.route.params.id].pages[0].rows.splice(mutation.index, 0, row);
  },
  DELETE_ROW: (state, mutation) => {
    console.log('delete row', mutation);
  },
  UPDATE_ROW: (state, mutation) => {
    console.log('update row', mutation);
  },

  /*
  * Blocks
  */
  CREATE_BLOCK: (state, mutation) => {
    console.log('create block', mutation);
    state.dialog.isOpen = false;
    state.blocks.push(mutation);
  },
  DELETE_BLOCK: (state, mutation) => {
    console.log('delete block', mutation);
  },
  UPDATE_BLOCK: (state, mutation) => {
    console.log('update block', mutation);

    state.projects[0].pages[0].rows[mutation.rowIndex].blocks[mutation.index].title = mutation.title;
  },

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
});
