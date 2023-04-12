import { POST_NEWSLETTER } from '../types';

export default function userReducer (state={}, action) {
  switch(action.type) {
  case POST_NEWSLETTER:
    return {...state, ...action.payload};  
  default: 
    return state;
  }
}