import { combineReducers } from 'redux';
import alert from './reducers/alert';
import user from './reducers/user';

const rootReducer = combineReducers({
  alert,
  user,
});

export default rootReducer;
