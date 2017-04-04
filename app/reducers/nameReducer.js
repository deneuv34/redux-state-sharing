import { SHOW_CHANGE_NAME, INITIAL_NAME } from './../actions/actionState';

const nameReducer = (state = { name: 'DEFAULT RANGGA' }, action ) => {
  switch(action.type) {
    case SHOW_CHANGE_NAME: 
      return { name: 'wew' };
    case INITIAL_NAME: 
      return { name: 'wow' }
    default:
      return state;
  }
}

export default nameReducer;
