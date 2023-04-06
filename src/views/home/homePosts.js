import React, {useCallback, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../store/actions';

import {Spinner, Button} from 'react-bootstrap';
 
export default function HomePosts() {
  const [pagination, setPagination] = 
    useState({page: 1, order: 'desc', limit: 6});
  const [loading, setLoading] = useState(false);
  const homePost = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(homePost, pagination));
    if(pagination.page === 1) {
      setPagination({...pagination, page: pagination.page + 1});
    }
  }, [dispatch]);

  const loadMorePosts = () => {
    setLoading(true);
    setPagination({...pagination, page: pagination.page + 1});
    dispatch(getPosts(homePost, pagination)).then(() => {
      setLoading(false);
    }); 
  };
 
  return (
    <>
      {loading && <div className='row justify-content-center pb-5'>
        <Spinner animation="border" role="status" variant='primary'>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>}
      {!homePost.end && !loading && <div className='text-center'>
        <Button
          variant='outline-dark'
          onClick={() => loadMorePosts()}>
          Load more
        </Button>
      </div>
      }
    </>
  );
}
