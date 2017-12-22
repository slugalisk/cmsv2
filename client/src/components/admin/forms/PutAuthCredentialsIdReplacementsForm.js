import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

class PutAuthCredentialsIdReplacementsForm extends React.Component {
  render(){

  const { handleSubmit, pristine, submitting } = this.props;


  return (
    <form onSubmit={handleSubmit}>
     <Row className='admin_setup__row'>
        <label>Put Auth CredentialsId Replacement CredentialsId</label>
        <Field
          name='credentialsId'
          component='input'
          type='text'
          placeholder='credentialsId'
          className='admin_form_field'
        />
      </Row>
      <Row className='admin_setup__row'>
        <label>Put Auth CredentialsId Replacement ReplacementId</label>
        <Field
          name='replacementId'
          component='input'
          type='text'
          placeholder='ReplacementId'
          className='admin_form_field'
        />
      </Row>
      <Row className='admin_setup__row'>
        <label>Put Auth CredentialsId Replacement Code</label>
        <Field
          name='code'
          component='input'
          type='password'
          placeholder='Code'
          className='admin_form_field'
        />
      </Row>
      <Row className='admin_setup__row'>
        <label>Put Auth CredentialsId Email</label>
        <Field
          name='email'
          component='input'
          type='text'
          placeholder='Email'
          className='admin_form_field'
        />
      </Row>
      <Row className='admin_setup__row'>
        <label>Put Auth CredentialsId Password</label>
        <Field
          name='password'
          component='input'
          type='password'
          placeholder='Password'
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
  form: 'putAuthCredentialsIdReplacements', // a unique identifier for this form
})(PutAuthCredentialsIdReplacementsForm);
