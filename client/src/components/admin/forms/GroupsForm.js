import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

import ColorPickerWrapper from '../components/ColorPicker';
import Dropzone from 'react-dropzone';
const FILE_FIELD_NAME = 'files';



/* https://github.com/BBB/dropzone-redux-form-example */

const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <Col md={4} mdOffset={4} sm={4} smOffset={4} xs={4} xsOffset={4}>

      <Dropzone
        name={field.name}
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      {files && Array.isArray(files) && (
        <ul>
          { files.map((file, i) =>
            <div key={i}>
            <li>
              {file.name}
            </li>
            <li>
              <img 
                src={file.preview} 
                alt='preview'
                className='admin_dropzone_preview__200'
              />
            </li>
            <li>
              <img 
                src={file.preview} 
                alt='preview'
                className='admin_dropzone_preview__32'
              />
            </li>
            </div>
        ) }
        </ul>
      )}
    </Col>
  );
}


class GroupsForm extends React.Component{

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

          <div>
          <Col md={4} mdOffset={4} sm={4} smOffset={4} xs={4} xsOffset={4}>
          <label htmlFor={FILE_FIELD_NAME}>Files</label>
          </Col>
          <Row>
          <Field
            name={FILE_FIELD_NAME}
            component={renderDropzoneInput}
          />
          </Row>
        </div>

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
  form: 'groups', // a unique identifier for this form
})(GroupsForm);
