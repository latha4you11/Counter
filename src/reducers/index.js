import { combineReducers } from 'redux';
import counterReducer from './reducer_counter';

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
