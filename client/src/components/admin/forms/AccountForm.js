import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

const AccountForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <Row className='admin_setup__row'>
          <label>Username</label>
          <Field
            name='adminUsername'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
          />
        </Row>
        <Row className='admin_setup__row'>
          <label>First Name</label> 
          <Field
            name='adminFirstName'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
          />
        </Row>
        <Row className='admin_setup__row'>
          <label>Last Name</label>
          <Field
            name='adminLastName'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
          />
        </Row>
        <Row  className='admin_setup__row'>
          <label>Email</label>
          <Field
            name='adminEmail'
            component='input'
            type='email'
            placeholder='name@example.com'
            className='admin_form_field'
          />
        </Row>
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <Row  className='admin_setup__row'>
          <label>New Password</label>
          <Field
              name='adminPass'
              component='input'
              type='password'
              placeholder=''
              className='admin_form_field'
          />
        </Row>
        <Row className='admin_setup__row'>
          <label>Confirm Password</label>
          <Field
            name='adminPassConfirm'
            component='input'
            type='password'
            placeholder=''
            className='admin_form_field'
          />
        </Row>
        <Row className='admin_setup__row'>
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
        </Row>

        <Row className='admin_setup__row'>
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
        </Row>
      </Col>
    </Col>

    <Col md={12} mdOffset={0} sm={12} smOffset={0} xs={12} xsOffset={0}>
      <Col md={4} sm={6} xs={12}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_button_wrapper'>
            <Button 
              bsStyle="success" 
              type='submit' 
              disabled = {pristine || submitting}
              className='admin_button'
            >
              Submit
            </Button>
            <Button 
              bsStyle="info" 
              type='button' 
              disabled = {pristine || submitting} 
              onClick={reset}
              className='admin_button'
            >
              Clear Values
            </Button>
          </Row>
        </Col>
      </Col>
    </Col>

      
    </form>
  );
};

export default reduxForm({
  form: 'account', // a unique identifier for this form
})(AccountForm);
