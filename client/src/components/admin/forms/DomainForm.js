import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

const DomainForm = props => {

  const { handleSubmit, pristine, reset, submitting } = props;

  const testget=()=>{
    fetch('http://localhost:5000/testget')
  }

  const testput=()=>{
    fetch('http://localhost:5000/testput')
  }

  const testpost=()=>{
    fetch('http://localhost:5000/testpost')
  }


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

            <Button 
              bsStyle="warning" 
              type='button' 
              onClick={testget}
              className='admin_button'
            >
              test get
            </Button>

            <Button 
              bsStyle="warning" 
              type='button' 
              onClick={testput}
              className='admin_button'
            >
              test put
            </Button>

            <Button 
              bsStyle="warning" 
              type='button' 
              onClick={testpost}
              className='admin_button'
            >
              test post
            </Button>

          </Row>
        </Col>
      </Col>
    </Col>

      
    </form>
  );
};

export default reduxForm({
  form: 'domain', // a unique identifier for this form
})(DomainForm);
