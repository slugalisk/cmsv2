import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Row>
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

      <Row>
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
        <button type='submit' disabled = {pristine || submitting}>Submit</button>
        <button type='button' disabled = {pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </Row>
    </form>
  );
};

export default reduxForm({
  form: 'login', // a unique identifier for this form
})(LoginForm);
