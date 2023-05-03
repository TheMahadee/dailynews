import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, clearPosts } from '../../store/actions';

import {Spinner, Button} from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import Moment from 'react-moment';
import { LinkContainer } from 'react-router-bootstrap';
 
export default function HomePosts() {
  var pagination = {page: 1, order: 'desc', limit: 6};
  const [loading, setLoading] = useState(true);
  const homePost = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(homePost, pagination)).then(() => {
      setLoading(false);
    });
    return () => {
      dispatch(clearPosts());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const loadMorePosts = () => {
    setLoading(true);
    pagination = {...pagination, page: pagination.page + 1};
    dispatch(getPosts(homePost, pagination)).then(() => {
      setLoading(false);
    }); 
  };
 
  return (
    <>
      <Masonry
        breakpointCols={{default: 3, 800: 2, 500: 1}}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column' >
        {homePost.posts ? homePost.posts.map((post) => (
          <div key={post.id}>
            <img style={{width: '100%', height: 200}} 
              src={post.image} alt={post.title} />
            <div className='author'>
              <span>{post.author} - </span>
              <Moment format='DD MMMM Y'>
                {post.createdAt}
              </Moment>
            </div>
            <div className='content'>
              <div className='title'>{post.title}</div>
              <div className='excerpt'>{post.excerpt}</div>
              <LinkContainer to={`/article/${post.id}`} className='mt-3'>
                <Button variant='light'>Read more</Button>
              </LinkContainer>
            </div>
          </div>
        )) : null}
      </Masonry>
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
