import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

import ColorPickerWrapper from '../components/ColorPicker';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../../../actions/setup';

class SetupForm extends React.Component{

  render(){
  
    const { handleSubmit, 
            pristine, 
            reset, 
            submitting,
          } = this.props;


    return (
 
      <form onSubmit={handleSubmit}>
      <h2>Page</h2>
      
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
                placeholder={this.props.colorChoice['colorPickerPageBackground']}
              />
          </Col>

         <ColorPickerWrapper
            colorPickerName = 'colorPickerPageBackground'
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
              placeholder={this.props.colorChoice['colorPickerPageHeader1']}
            />
          </Col>
          <ColorPickerWrapper
            colorPickerName = 'colorPickerPageHeader1'
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
              placeholder={this.props.colorChoice['colorPickerPageHeader2']}
            />
          </Col>
          <ColorPickerWrapper
            colorPickerName = 'colorPickerPageHeader2'
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

        <h2>Sections</h2>

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
            placeholder={this.props.colorChoice['colorPickerSectionBackground']}
          />
        </Col>
        <ColorPickerWrapper
            colorPickerName = 'colorPickerSectionBackground'
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
            placeholder={this.props.colorChoice['colorPickerHeaderColor']}
          />
        </Col>
        <ColorPickerWrapper
            colorPickerName = 'colorPickerHeaderColor'
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
            placeholder={this.props.colorChoice['colorPickerSectionBody']}
          />
        </Col>
        <ColorPickerWrapper
            colorPickerName = 'colorPickerSectionBody'
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
            placeholder={this.props.colorChoice['colorPickerSectionLink']}
          />
        </Col>
        <ColorPickerWrapper
            colorPickerName = 'colorPickerSectionLink'
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
            placeholder={this.props.colorChoice['colorPickerSectionBorder']}
          />
        </Col>
        <ColorPickerWrapper
            colorPickerName = 'colorPickerSectionBorder'
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
  form: 'setup', // a unique identifier for this form
})(SetupForm);
