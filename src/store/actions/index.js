import * as api from '../../api';
import * as Type from '../types';

/* POST */
export const getPosts = (prevState, pagination) => ({
  type: Type.GET_POSTS,
  payload: api.getPosts(prevState, pagination)
});

/* User */
export const addNewsletter = data => ({
  type: Type.POST_NEWSLETTER,
  payload: api.addNewsletter(data),
});