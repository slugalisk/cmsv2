import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

import ColorPickerWrapper from '../components/ColorPicker';


class SetupSectionForm extends React.Component{

  render(){
  
    const { handleSubmit, 
            pristine, 
            reset, 
            submitting,
          } = this.props;


    return (
 
      <form onSubmit={handleSubmit}>
        <Row className='admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}>
        <label className='admin_setup__label'>Background</label>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
          <Field
            name='sectionBackgroundColor'
            component='input'
            type='text'
            className='admin_form_field'
          />
        </Col>
        <ColorPickerWrapper
            colorPickerName = 'colorPickerSectionBackground'
            fieldName='sectionBackgroundColor'
            formName='setup'
            dispatch={this.props.dispatch}
            />
      </Row>

      <Row className='admin_setup__row'>
      <Col md = {4} sm = {4} xs = {4}>
      <label className='admin_setup__label'>Header Text</label>
      </Col>
        <Col md = {4} sm = {4} xs = {4}>
          <Field
            name='sectionHeaderTextColor'
            component='input'
            type='text'
            className='admin_form_field'
          />
        </Col>
        <ColorPickerWrapper
            colorPickerName = 'colorPickerHeaderColor'
            fieldName='sectionHeaderTextColor'
            formName='setup'
            dispatch={this.props.dispatch}
            />
      </Row>
      
      <Row className='admin_setup__row'>
      <Col md = {4} sm = {4} xs = {4}>
      <label className='admin_setup__label'>Header Size</label>
      </Col>
        <Col md = {4} sm = {4} xs = {4}>
          <Field
            name='sectionHeaderSize'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
          />
        </Col>
      </Row>

      <Row className='admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}>
        <label className='admin_setup__label'>Body Text</label>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
          <Field
            name='sectionBodyTextColor'
            component='input'
            type='text'
            className='admin_form_field'
          />
        </Col>
        <ColorPickerWrapper
            colorPickerName = 'colorPickerSectionBody'
            fieldName='sectionBodyTextColor'
            formName='setup'
            dispatch={this.props.dispatch}
            />
      </Row>

      <Row className='admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}>
        <label className='admin_setup__label'>Link Text</label>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
          <Field
            name='sectionLinkColor'
            component='input'
            type='text'
            className='admin_form_field'
          />
        </Col>
        <ColorPickerWrapper
            colorPickerName = 'colorPickerSectionLink'
            fieldName='sectionLinkColor'
            formName='setup'
            dispatch={this.props.dispatch}
            />
      </Row>

      <Row className='admin_setup__row'>
      <Col md = {4} sm = {4} xs = {4}>
        <label className='admin_setup__label'>Border Color</label>
      </Col>
        <Col md = {4} sm = {4} xs = {4}>
          <Field
            name='sectionBorderColor'
            component='input'
            type='text'
            className='admin_form_field'
          />
        </Col>
        <ColorPickerWrapper
            colorPickerName = 'colorPickerSectionBorder'
            fieldName='sectionBorderColor'
            formName='setup'
            dispatch={this.props.dispatch}
            />
      </Row>

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
            className='admin_button'
            onClick={reset}
          >
            Clear Values
          </Button>
        </Row>
      </form>
    );
  }
}

export default reduxForm({
  form: 'setupSection', // a unique identifier for this form
})(SetupSectionForm);
