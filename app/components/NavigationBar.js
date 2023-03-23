import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavigationBar() {
  return (
      <Navbar collapseOnSelect expand="lg">
        <Container className='NavigationContainer'>
          <Navbar.Brand href="#home" id='toolbox'>Toolbox</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#overview" id='overview'>Overview</Nav.Link>
              <Nav.Link href="#toolboxApp" id='toolBoxApp'>Toolbox App</Nav.Link>
            </Nav>
            <Button variant="outline-secondary" id='buyNowBtn'>Buy Now</Button>{' '}
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavigationBar;
