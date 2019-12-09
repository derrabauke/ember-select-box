import { set } from '@ember/object';

export function receiveArgs(selectBox) {
  if (selectBox.disabled) {
    disable(selectBox);
  } else {
    enable(selectBox);
  }
}

function disable(selectBox) {
  set(selectBox, 'previousTabIndex', selectBox.tabIndex);
  set(selectBox, 'tabIndex', '-1');
}

function enable(selectBox) {
  set(
    selectBox,
    'tabIndex',
    selectBox.previousTabIndex === undefined
      ? selectBox.tabIndex
      : selectBox.previousTabIndex
  );
}
