import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

class EmailForm extends React.Component{

  render(){
  
    const { handleSubmit, 
            pristine, 
            reset, 
            submitting,
          } = this.props;


    return (
 
      <form onSubmit={handleSubmit}>
 <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={10} xsOffset={1}>
          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>Everyone</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='everyone'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>T1 Users</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='t1Users'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>T2 Users</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='t2Users'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>T3 Users</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='t3Users'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>T4 Users</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='t4Users'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>Moderators</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='moderators'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>Administrator</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='administrator'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>
        </Col>




      <Col md={12} mdOffset={0} sm={12} smOffset={0} xs={12} xsOffset={0}>
        <Col md={4} sm={6} xs={12}>
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
            <Row>
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
  }
}

export default reduxForm({
  form: 'email', // a unique identifier for this form
})(EmailForm);
