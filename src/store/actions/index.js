import * as api from '../../api';
import * as Type from '../types';

/* POST */
export const getPosts = (prevState, pagination) => ({
  type: Type.GET_POSTS,
  payload: api.getPosts(prevState, pagination)
});

export const clearPosts = () => ({
  type: Type.CLEAR_POSTS,
  payload: {
    posts: [],
    page: 1,
    end: false
  }
});

/* User */
export const addNewsletter = data => ({
  type: Type.POST_NEWSLETTER,
  payload: api.addNewsletter(data),
});

export const clearNewsLetter = () => ({
  type: Type.CLEAR_NEWSLETTER,
  payload: {
    newsletter: false,
    email: []
  },
});