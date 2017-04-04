export const SHOW_CHANGE_NAME = 'SHOW_CHANGE_NAME';
export const INITIAL_NAME = 'INITIAL_NAME';

export function showChangeName() {
  return { type: SHOW_CHANGE_NAME, name: 'wew' }
}

export function initialName() {
  return { type: INITIAL_NAME, name: 'Rangga' }
}