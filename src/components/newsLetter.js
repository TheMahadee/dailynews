import React, {useRef, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import {addNewsletter} from '../store/actions';

export default function NewsLetter() {
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();
  const textInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const value = textInput.current.value;
    dispatch(addNewsletter({email: value}));
  };

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
            <Button variant='primary' type='submit'>
              Subscribe
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
