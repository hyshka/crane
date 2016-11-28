function makeAction(type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args);
}

// generic actions
export const showDialog = makeAction('SHOW_DIALOG');
export const hideDialog = makeAction('HIDE_DIALOG');
export const addBlock = makeAction('ADD_BLOCK');
