import { SHOW_CHANGE_NAME, INITIAL_NAME } from './../actions/actionState';

const Name = (state = { name: 'DEFAULT RANGGA' }, action ) => {
  switch(action.type) {
    case SHOW_CHANGE_NAME: 
      return { name: action.name };
    case INITIAL_NAME: 
      return { name: action.name }
    default:
      return state;
  }
}

export default Name;
