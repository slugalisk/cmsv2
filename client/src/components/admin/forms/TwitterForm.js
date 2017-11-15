import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

const TwitterForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
    <h2>Twitter</h2>
      <label>Username</label>
      <Field
        name='username'
        component='input'
        type='text'
        placeholder=''
        className='admin_form_field'
      />
      <label>Consumer Key</label> 
      <Field
        name='consumerKey'
        component='input'
        type='text'
        placeholder=''
        className='admin_form_field'
      />
      <label>Consumer Secret</label>
      <Field
        name='consumerSecret'
        component='input'
        type='text'
        placeholder=''
        className='admin_form_field'
      />
      <label>Access Token</label>
      <Field
        name='accessToken'
        component='input'
        type='email'
        placeholder=''
        className='admin_form_field'
      />
      <label>Access Secret</label>
      <Field
        name='accessSecret'
        component='input'
        type='password'
        placeholder=''
        className='admin_form_field'
      />

      <Row>
        <Button 
          bsStyle="success" 
          type='submit' 
          disabled = {pristine || submitting}
        >
          Submit
        </Button>
        <Button 
          bsStyle="info" 
          type='button' 
          disabled = {pristine || submitting} 
          onClick={reset}
        >
          Clear Values
        </Button>
      </Row>
    </form>
  );
};

export default reduxForm({
  form: 'twitter', // a unique identifier for this form
})(TwitterForm);
