import React from 'react';
import { Form } from 'react-bootstrap';

const AttributeFilterComponent = () => {
  return (
    <div>
      <Form>
        <Form.Label>Color</Form.Label>
        <Form.Check type="checkbox" id="default-checkbox" label="Green" />
      </Form>
    </div>
  );
};

export default AttributeFilterComponent;
