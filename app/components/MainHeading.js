import Button from 'react-bootstrap/Button';
import React from 'react';
import 'index.entry.pcss';
function MainHeading(props) {
  return (
    <>
      <h1 id='main-heading'>{props.mainHeading}</h1>
    </>
  );
}

export default MainHeading;