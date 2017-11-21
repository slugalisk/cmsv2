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
              name='registerUsername'
              component='input'
              type='text'
              placeholder='Username'
              className='form_field'
            />
        </Col>
      </Row>

      <Row className='form_row'>
        <Col md = {12} sm = {12} xs = {12}> 
          <label>Email Address</label>
            <Field
              name='registerEmail'
              component='input'
              type='text'
              placeholder='Email Address'
              className='form_field'
            />
        </Col>
      </Row>

      <Row className='form_row'>
        <Col md = {5} sm = {12} xs = {12}> 
        <label>Password</label> 
          <Field
            name='registerPassword'
            component='input'
            type='password'
            placeholder='Password'
            className='form_field'
          />
        </Col>
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
  form: 'registration', // a unique identifier for this form
})(RegistrationForm);
