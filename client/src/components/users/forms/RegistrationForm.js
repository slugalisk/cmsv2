import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

const RegistrationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Row className='form_row'>
          <label>
            Username
          </label>
          <Field
            name='registerUsername'
            component='input'
            type='text'
            placeholder='Username'
            className='form_field'
          />
      </Row>

      <Row className='form_row'>
          <label>
            Email Address
          </label>
          <Field
            name='registerEmail'
            component='input'
            type='text'
            placeholder='Email Address'
            className='form_field'
          />
      </Row>

      <Row className='form_row'>
        <label>
          Password
        </label> 
        <Field
          name='registerPassword'
          component='input'
          type='password'
          placeholder='Password'
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
          Register
        </Button>
      </Row>
    </form>
  );
};

export default reduxForm({
  form: 'registration', // a unique identifier for this form
})(RegistrationForm);
