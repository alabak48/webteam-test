import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function EmailForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="By submitting this form I agree to the JetBrains Privacy Policy?" />
      </Form.Group>
      <Button variant="primary" type="submit" id="btn-org">
        Subscribe
      </Button>
    </Form>
  );
}

export default EmailForm;