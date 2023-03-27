import Button from 'react-bootstrap/Button';
import React from 'react';
import 'index.entry.pcss';
function Buttons(props) {
  return (
    <>
      <Button id='btn-org'>{props.btnTxt}</Button>
    </>
  );
}

export default Buttons;