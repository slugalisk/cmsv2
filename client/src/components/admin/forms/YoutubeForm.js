import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

const YoutubeForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
    <h2>Youtube</h2>
      <label>Username</label>
      <Field
        name='username'
        component='input'
        type='text'
        placeholder=''
        className='admin_form_field'
      />
      <label>Access Key</label> 
      <Field
        name='accessKey'
        component='input'
        type='text'
        placeholder=''
        className='admin_form_field'
      />
     

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
  form: 'youtube', // a unique identifier for this form
})(YoutubeForm);
