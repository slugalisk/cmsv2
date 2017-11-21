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
          <Row>
            <label>
              Background Color
            </label>
          </Row>
          <Field
            name='pageBackgroundColor'
            component='input'
            type='text'
            className='admin_form_field'  
          />          
          <ColorPickerWrapper
            colorPickerName = 'colorPickerPageBackground'
            fieldName='pageBackgroundColor'
            formName='setup'
            dispatch={this.props.dispatch}
          />
        </Row>

        <Row className='admin_setup__row'>
          <Row>
            <label>
              Header Color 1
            </label>
          </Row>
          <Field
            name='pageHeaderColor1'
            component='input'
            type='text'
            className='admin_form_field'
          />
          <ColorPickerWrapper
            colorPickerName = 'colorPickerPageHeader1'
            fieldName='pageHeaderColor1'
            formName='setup'
            dispatch={this.props.dispatch}
          />
        </Row>

        <Row className='admin_setup__row'>
          <Row>
            <label>
              Header Color 2
            </label>
          </Row>
          <Field
            name='pageHeaderColor2'
            component='input'
            type='text'
            className='admin_form_field'
          />
          <ColorPickerWrapper
            colorPickerName = 'colorPickerPageHeader2'
            fieldName='pageHeaderColor2'
            formName='setup'
            dispatch={this.props.dispatch}
          />
        </Row>

        <Row className='admin_setup__row'>
          <Row>
            <label>
              Header Font
            </label>
          </Row>
            <Field 
              name='pageHeaderFont' 
              component='select'
              className='admin_form_field'
            >
            <option/>
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
        </Row>

        <Row className='admin_setup__row'>
          <Row>
            <label>
              Body Font
            </label>
          </Row>
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
  form: 'setup', // a unique identifier for this form
})(SetupForm);
