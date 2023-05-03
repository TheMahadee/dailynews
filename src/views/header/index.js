import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default () => {
  return (
    <>
      <Navbar className='pacifico bg-dark'>
        <LinkContainer to='/'>
          <Navbar.Brand className='fs-2 text-white'>
            The Mugiwara News
          </Navbar.Brand>
        </LinkContainer>
      </Navbar>
      <Nav className='bg-off-white'>
        <Nav.Item>
          <LinkContainer to='/'>
            <Nav.Link>
              Home
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to='/contact'>
            <Nav.Link>
              Contacts
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </>
  );
};
