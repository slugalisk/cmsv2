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
          <Row>
            <label>
            Background
            </label>
          </Row>
          <Field
            name='sectionBackgroundColor'
            component='input'
            type='text'
            className='admin_form_field__small'
          />
          <ColorPickerWrapper
            colorPickerName = 'colorPickerSectionBackground'
            fieldName='sectionBackgroundColor'
            formName='setup'
            dispatch={this.props.dispatch}
          />
        </Row>

        <Row className='admin_setup__row'>
          <Row>
            <label>
            Header Text
            </label>
          </Row>
          <Field
            name='sectionHeaderTextColor'
            component='input'
            type='text'
            className='admin_form_field__small'
          />
          <ColorPickerWrapper
            colorPickerName = 'colorPickerHeaderColor'
            fieldName='sectionHeaderTextColor'
            formName='setup'
            dispatch={this.props.dispatch}
          />
        </Row>
      
        <Row className='admin_setup__row'>
          <Row>
            <label>
            Header Size
            </label>
          </Row>
          <Field
            name='sectionHeaderSize'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
          />
        </Row>

      <Row className='admin_setup__row'>
        <Row>
          <label>
          Body Text
          </label>
        </Row>
        <Field
          name='sectionBodyTextColor'
          component='input'
          type='text'
          className='admin_form_field__small'
        />
        <ColorPickerWrapper
          colorPickerName = 'colorPickerSectionBody'
          fieldName='sectionBodyTextColor'
          formName='setup'
          dispatch={this.props.dispatch}
        />
      </Row>

      <Row className='admin_setup__row'>
        <Row>
          <label>
          Link Text
          </label>
        </Row>
        <Field
          name='sectionLinkColor'
          component='input'
          type='text'
          className='admin_form_field__small'
        />
        <ColorPickerWrapper
          colorPickerName = 'colorPickerSectionLink'
          fieldName='sectionLinkColor'
          formName='setup'
          dispatch={this.props.dispatch}
        />
      </Row>

      <Row className='admin_setup__row'>
        <Row>
          <label>
          Border Color
          </label>
        </Row>
        <Field
          name='sectionBorderColor'
          component='input'
          type='text'
          className='admin_form_field__small'
        />
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
          onClick={reset}
          className='admin_button'
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
