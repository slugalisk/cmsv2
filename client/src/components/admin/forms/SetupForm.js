import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

import ColorPickerWrapper from '../components/ColorPicker';


class SetupForm extends React.Component{

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
            <label className='admin_setup__label'>Background Color</label>
          </Col>
          <Col md = {4} sm = {4} xs = {4}>
              <Field
                name='pageBackgroundColor'
                component='input'
                type='text'
                className='admin_form_field'  
              />
          </Col>

         <ColorPickerWrapper
            colorPickerName = 'colorPickerPageBackground'
            fieldName='pageBackgroundColor'
            formName='setup'
            dispatch={this.props.dispatch}
          />

        </Row>

        <Row className='admin_setup__row'>
          <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Header Color 1</label>
          </Col>
          <Col md = {4} sm = {4} xs = {4}> 
            <Field
              name='pageHeaderColor1'
              component='input'
              type='text'
              className='admin_form_field'
            />
          </Col>
          <ColorPickerWrapper
            colorPickerName = 'colorPickerPageHeader1'
            fieldName='pageHeaderColor1'
            formName='setup'
            dispatch={this.props.dispatch}
           />
        
        </Row>

        <Row className='admin_setup__row'>
          <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Header Color 2</label>
          </Col>
          <Col md = {4} sm = {4} xs = {4}> 
            <Field
              name='pageHeaderColor2'
              component='input'
              type='text'
              className='admin_form_field'
            />
          </Col>
          <ColorPickerWrapper
            colorPickerName = 'colorPickerPageHeader2'
            fieldName='pageHeaderColor2'
            formName='setup'
            dispatch={this.props.dispatch}
          />
        
        </Row>

        <Row className='admin_setup__row'>
          <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Header Font</label>
          </Col>
          <Col md = {4} sm = {4} xs = {4}> 
            <Field 
              name='pageHeaderFont' 
              component='select'
              className='admin_form_field'
            >
              <option />
              <option value='georgia'>Georgia</option>
              <option value='palatino linotype'>Palatino Linotype</option>
              <option value='times new roman'>Times New Roman</option>
              <option value='Open Sans'>Open Sans</option>
              <option value='arial'>Arial</option>
              <option value='arial black'>Arial Black</option>
              <option value='comic sans ms'>Comic Sans MS</option>
              <option value='impact'>Impact</option>
              <option value='lucida sans unicode'>Lucida Sans Unicode</option>
              <option value='tahoma'>Tahoma</option>
              <option value='trebuchet ms'>Trebuchet MS</option>
              <option value='verdana'>Verdana</option>
              <option value='courier new'>Courier New</option>
              <option value='lucida console'>Lucida Console</option>
            </Field>
          </Col>
        </Row>

        <Row className='admin_setup__row'>
          <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Body Font</label>
          </Col>
          <Col md = {4} sm = {4} xs = {4}> 
            <Field 
              name='pageBodyFont'
              component='select'
              className='admin_form_field'
            >
              <option />
              <option value='georgia'>Georgia</option>
              <option value='palatino linotype'>Palatino Linotype</option>
              <option value='times new roman'>Times New Roman</option>
              <option value='Open Sans'>Open Sans</option>
              <option value='arial'>Arial</option>
              <option value='arial black'>Arial Black</option>
              <option value='comic sans ms'>Comic Sans MS</option>
              <option value='impact'>Impact</option>
              <option value='lucida sans unicode'>Lucida Sans Unicode</option>
              <option value='tahoma'>Tahoma</option>
              <option value='trebuchet ms'>Trebuchet MS</option>
              <option value='verdana'>Verdana</option>
              <option value='courier new'>Courier New</option>
              <option value='lucida console'>Lucida Console</option>
            </Field>
          </Col>
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
  form: 'setup', // a unique identifier for this form
})(SetupForm);
