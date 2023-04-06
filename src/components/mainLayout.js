import React from 'react';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MainLayout({children}) {
  return (
    <Container className='pt-5 pb-5'>
      {children}
      <ToastContainer />
    </Container>
  );
}
