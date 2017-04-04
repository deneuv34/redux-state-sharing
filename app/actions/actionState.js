export const SHOW_CHANGE_NAME = 'SHOW_CHANGE_NAME';
export const INITIAL_NAME = 'INITIAL_NAME';

export function showChangeName(name) {
  return { type: SHOW_CHANGE_NAME, name }
}

export function initialName(name) {
  return { type: INITIAL_NAME, name }
}