import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

const RecoveryForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Row className='form_row'>
          <label>
            Recovery Email
          </label>
          <Field
            name='postAuthRecoveryEmail'
            component='input'
            type='text'
            placeholder='name@example.com'
            className='form_field'
          />
      </Row>

      <Row>
        <Button 
          bsStyle="success" 
          type='submit' 
          disabled = {pristine || submitting}
          className='form_button'
        >
          Submit
        </Button>
      </Row>
    </form>
  );
};

export default reduxForm({
  form: 'recovery', // a unique identifier for this form
})(RecoveryForm);
