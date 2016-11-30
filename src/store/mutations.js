// Disable this rule for this file only
/* eslint-disable no-param-reassign */

/*
* Size Dialog
*/
export function showDialog(state) {
  console.log('show dialog');
  state.dialog.isOpen = true;
}

export function hideDialog(state) {
  console.log('hide dialog');
  state.dialog.isOpen = false;
}

/*
* Blocks
*/
export function addBlock(state) {
  console.log('add block');
  state.blocks.push(
    {
      title: 'Footer',
      size: 'small',
    },
  );
}
