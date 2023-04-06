import { combineReducers } from 'redux';
import users from './userReducer';
import posts from './postReducer';

const appReducers = combineReducers({
  posts, users
});

export default appReducers;