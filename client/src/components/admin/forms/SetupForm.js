import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

import { ChromePicker } from 'react-color';
import dropper from '../../../images/dropper.svg';

const SetupForm = props => {
  const { handleSubmit, pristine, reset, submitting, togglePageBackgroundColor, pageBackgroundColorDisplay } = props;
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
              placeholder=''
              className='admin_form_field'
            />
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <img 
          src={dropper} 
          className= 'admin_setup__dropper' 
          onClick={ togglePageBackgroundColor } 
          alt="Eye Dropper By Gregor Cresnar"
        />
        { pageBackgroundColorDisplay ? 
          <div className = 'admin_setup__popover'>
            <div className = 'admin_setup__cover' onClick={ togglePageBackgroundColor }/>
            <ChromePicker
            /*onChangeComplete={ this.changebackground }*/
           />
        </div> 
        : 
        null 
        }
        </Col>
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
            placeholder=''
            className='admin_form_field'
          />
        </Col>
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
            placeholder=''
            className='admin_form_field'
          />
        </Col>
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
          placeholder=''
          className='admin_form_field'
        />
      </Col>
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
          placeholder=''
          className='admin_form_field'
        />
      </Col>
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
          placeholder=''
          className='admin_form_field'
        />
      </Col>
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
          placeholder=''
          className='admin_form_field'
        />
      </Col>
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
          placeholder=''
          className='admin_form_field'
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
};

export default reduxForm({
  form: 'setup', // a unique identifier for this form
})(SetupForm);
