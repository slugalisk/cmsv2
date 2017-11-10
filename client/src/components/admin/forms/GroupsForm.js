import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

import ColorPickerWrapper from '../components/ColorPicker';

class GroupsForm extends React.Component{

  render(){
  
    const { handleSubmit, 
            pristine, 
            reset, 
            submitting,
          } = this.props;


    return (
 
      <form onSubmit={handleSubmit}>
      <h2>Groups</h2>
      
      <Row className='admin_setup__row'>
          <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Group Name</label>
          </Col>
          <Col md = {4} sm = {4} xs = {4}> 
            <Field
              name='groupName'
              component='input'
              type='text'
              className='admin_form_field'
            />
          </Col>
  
          </Row>

        <Row className='admin_setup__row'>
          <Col md = {4} sm = {4} xs = {4}> 
            <label className='admin_setup__label'>Group Color</label>
          </Col>
          <Col md = {4} sm = {4} xs = {4}>
              <Field
                name='groupColor'
                component='input'
                type='text'
                className='admin_form_field'  
              />
          </Col>

         <ColorPickerWrapper
            colorPickerName = 'groupColorPicker'
            fieldName='groupColor'
            formName='groups'
            dispatch={this.props.dispatch}
          />

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
  form: 'groups', // a unique identifier for this form
})(GroupsForm);
