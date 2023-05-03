import React, {useRef , useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import {addNewsletter, clearNewsLetter} from '../store/actions';
import { showToast } from './tools';

export default function NewsLetter() {
  const userData = useSelector(state => state.users);
  const dispatch = useDispatch();
  const textInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const value = textInput.current.value;
    dispatch(addNewsletter({email: value}));
  };

  useEffect(() => {
    if(userData.newsletter) {
      if(userData.newsletter === 'added') {
        showToast('SUCCESS', 'Thank you for subscribing !!!');
        textInput.current.value = '';
        // dispatch(clearNewsLetter());
      } else if(userData.newsletter === 'failed') {
        showToast('ERROR', 'You are already on the database !!!');
        textInput.current.value = '';
        // dispatch(clearNewsLetter());
      }
    }
  }, [dispatch, userData]);

  useEffect(() => {
    return () => {
      dispatch(clearNewsLetter());
    };
  }, [dispatch]);

  return (
    <>
      <div className='newsletter-container'>
        <h1 className='delicious'>Join our Newsletter</h1>
        <div className='form'>
          <Form onSubmit={handleSubmit} className='mt-4'>
            <Form.Group>
              <Form.Control 
                type='text'
                placeholder='Example: yourmail@mail.com'
                name='email'
                ref={textInput} />
            </Form.Group>
            <Button variant='primary' type='submit' className='mt-1'>
              Subscribe
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
