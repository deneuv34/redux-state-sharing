import combineReducers from 'redux';
import nameReducer from './nameReducer';

const currentState = (state = {}, action) => {
  return {};
};
// Combine Reducers
const reducer = combineReducers({
  currentState, nameReducer
});

export default reducer;