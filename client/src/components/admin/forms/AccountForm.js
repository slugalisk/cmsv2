import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

const AccountForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Row>
        <Col md = {12} sm = {12} xs = {12}> 
          <label>Username</label>
            <Field
              name='adminUsername'
              component='input'
              type='text'
              placeholder=''
              className='admin_form_field'
            />
        </Col>
      </Row>

      <Row>
        <Col md = {5} sm = {12} xs = {12}> 
        <label>First Name</label> 
          <Field
            name='adminFirstName'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
          />
        </Col>

        <Col md = {5} mdOffset={2} sm = {12} smOffset = {0} xs = {12} xsOffset = {0}> 
        <label>Last Name</label>
          <Field
            name='adminLastName'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
          />
        </Col>
      </Row>

      <Row>
      <Col md = {12} sm = {12} xs = {12}>
      <label>Email</label>
        <Field
          name='adminEmail'
          component='input'
          type='email'
          placeholder=''
          className='admin_form_field'
        />
      </Col>
    </Row>

    <Row>
    <Col md = {5} sm = {12} xs = {12}>
    <label>New Password</label>

        <Field
          name='adminPass'
          component='input'
          type='password'
          placeholder=''
          className='admin_form_field'
        />
      </Col>

    <Col md = {5} mdOffset={2} sm = {12} smOffset = {0} xs = {12} xsOffset = {0}>
    <label>Confirm Password</label>
        <Field
          name='adminPassConfirm'
          component='input'
          type='password'
          placeholder=''
          className='admin_form_field'
        />
      </Col>
    </Row>

    <Row>
      <Col md = {5} sm = {12} xs = {12}>
      <label>Language</label>
      <Field 
        name='adminLanguage'
        component='select'
        className='admin_form_field'
      >
        <option />
        <option value='georgia'>English</option>
        <option value='georgia'>Not English</option>
      </Field>
      </Col>

      <Col md = {5} mdOffset={2} sm = {12} smOffset = {0} xs = {12} xsOffset = {0}>
      <label>Role</label>
      <Field 
        name='adminRole'
        component='select'
        className='admin_form_field'
        disabled='disabled'
        value='Admin'
      >

        <option value='Admin'>Admin</option>
      </Field>
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
  form: 'account', // a unique identifier for this form
})(AccountForm);
