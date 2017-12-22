import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

class PostAuthCredentialsIdRecoveryForm extends React.Component {
  render(){

  const { handleSubmit, pristine, submitting } = this.props;


  return (
    <form onSubmit={handleSubmit}>
     <Row className='admin_setup__row'>
        <label>Post Auth CredentialsId Replacement CredentialsId</label>
        <Field
          name='credentialsId'
          component='input'
          type='text'
          placeholder='credentialsId'
          className='admin_form_field'
        />
      </Row>
      <Row className='admin_setup__row'>
        <label>Post Auth CredentialsId Replacement Current Email</label>
        <Field
          name='currentEmail'
          component='input'
          type='text'
          placeholder='Current Email'
          className='admin_form_field'
        />
      </Row>
      <Row className='admin_setup__row'>
        <label>Post Auth CredentialsId Replacement Current Password</label>
        <Field
          name='currentPassword'
          component='input'
          type='password'
          placeholder='Current Password'
          className='admin_form_field'
        />
      </Row>
      <Row className='admin_setup__row'>
        <label>Post Auth CredentialsId Replacement Replacement Email</label>
        <Field
          name='replacementEmail'
          component='input'
          type='text'
          placeholder='Replacement Email'
          className='admin_form_field'
        />
      </Row>
      <Row className='admin_setup__row'>
        <label>Post Auth CredentialsId Replacement Replacement Password</label>
        <Field
          name='replacementPassword'
          component='input'
          type='password'
          placeholder='Replacement Password'
          className='admin_form_field'
        />
       </Row>
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

            </Row>
          </Col>
        </Col>
      </Col>
    </form>
  );
}
};

export default reduxForm({
  form: 'postAuthCredentialsIdReplacements', // a unique identifier for this form
})(PostAuthCredentialsIdReplacementsForm);
