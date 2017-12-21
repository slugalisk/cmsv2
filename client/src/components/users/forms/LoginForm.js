import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Button} from 'react-bootstrap';

const LoginForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Row className='form_row'>
          <label>
            Email Address
          </label>
          <Field
            name='loginUsername'
            component='input'
            type='text'
            placeholder='name@example.com'
            className='form_field'
          />
      </Row>

      <Row className='form_row'>
        <label>
          Password
        </label> 
        <Field
          name='loginPassword'
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
          Log In
        </Button>
      </Row>
    </form>
  );
};

export default reduxForm({
  form: 'login', // a unique identifier for this form
})(LoginForm);
