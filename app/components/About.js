import React from 'react';
import 'index.entry.pcss';
import Container from 'react-bootstrap/Container';

function About() {
  return (
    <>
      <Container className='about'>

        <Container className='list-about'>
          <h6 id="about">About</h6>
        <ul>
        <li>Company</li>
        <li>Contacts</li>
        <li>Press & Logos</li>
        <li>Careers</li>
      </ul>
        </Container>
      </Container>
    </>
  );
}
export default About;

