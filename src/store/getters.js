export default {
  /*
  * Projects
  */
  project: state => state.projects[state.route.params.id],

  /*
  * Pages
  */
  // pages: state => state.projects[0].pages,

  /*
  * Rows
  */
  // rows: state => state.projects[0].pages[0].rows,

  /*
  * Blocks
  */
  // blocks: state => state.projects[0].rows,

  /*
  * Size Dialog
  */
  dialogIsOpen: state => state.dialog.isOpen,
};
