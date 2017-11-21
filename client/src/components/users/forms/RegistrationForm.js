import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

const RegistrationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Row className='form_row'>
        <Col md = {12} sm = {12} xs = {12}> 
          <label>Username</label>
            <Field
              name='loginUsername'
              component='input'
              type='text'
              placeholder=''
              className='admin_form_field'
            />
        </Col>
      </Row>

      <Row className='form_row'>
        <Col md = {5} sm = {12} xs = {12}> 
        <label>Password</label> 
          <Field
            name='loginPassword'
            component='input'
            type='password'
            placeholder=''
            className='admin_form_field'
          />
        </Col>
      </Row>

   

      <Row>
        <Button 
          bsStyle="success" 
          type='submit' 
          disabled = {pristine || submitting}
          className='user_button'
        >
          Submit
        </Button>
        <Button 
          bsStyle="info" 
          type='button' 
          disabled = {pristine || submitting} 
          onClick={reset}
          className='user_button'
        >
          Clear Values
        </Button>
      </Row>
    </form>
  );
};

export default reduxForm({
  form: 'registration', // a unique identifier for this form
})(RegistrationForm);
