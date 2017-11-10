import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

class EmailForm extends React.Component{

  render(){
  
    const { handleSubmit, 
            pristine, 
            reset, 
            submitting,
          } = this.props;


    return (
 
      <form onSubmit={handleSubmit}>
      <h2>Email</h2>
      
      <Row className='admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Regular Users</label>
        </Col>
        <Col md = {4} sm = {4} xs = {4}> 
          <Field
            name='regularUsers'
            component='input'
            type='checkbox'
          />
        </Col>
      </Row>

      <Row className='admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Tier 1</label>
        </Col>
        <Col md = {4} sm = {4} xs = {4}> 
          <Field
            name='t1Users'
            component='input'
            type='checkbox'
          />
        </Col>
      </Row>

      <Row className='admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Tier 2</label>
        </Col>
        <Col md = {4} sm = {4} xs = {4}> 
          <Field
            name='t2Users'
            component='input'
            type='checkbox'
          />
        </Col>
      </Row>

      <Row className='admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Tier 3</label>
        </Col>
        <Col md = {4} sm = {4} xs = {4}> 
          <Field
            name='t3Users'
            component='input'
            type='checkbox'
          />
        </Col>
      </Row>

      <Row className='admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Tier 4</label>
        </Col>
        <Col md = {4} sm = {4} xs = {4}> 
          <Field
            name='t4Users'
            component='input'
            type='checkbox'
          />
        </Col>
      </Row>

      <Row className='admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Moderators</label>
        </Col>
        <Col md = {4} sm = {4} xs = {4}> 
          <Field
            name='moderators'
            component='input'
            type='checkbox'
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
  }
}

export default reduxForm({
  form: 'email', // a unique identifier for this form
})(EmailForm);
