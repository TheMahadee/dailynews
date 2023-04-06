import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../store/actions';
 
export default function HomePosts() {
  const homePost = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
        HomePosts
    </>
  );
}
