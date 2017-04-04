import {combineReducers} from 'redux';
import Name from './nameReducer';

const currentState = (state = {}, action) => {
  return {};
};
// Combine Reducers
const reducer = combineReducers({
  currentState, Name
});

export default reducer;