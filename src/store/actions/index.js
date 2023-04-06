import * as api from '../../api';
import * as Type from '../types';

export const getPosts = (prevState, pagination) => ({
  type: Type.GET_POSTS,
  payload: api.getPosts(prevState, pagination)
});