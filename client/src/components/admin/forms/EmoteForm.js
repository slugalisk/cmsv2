import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

import Dropzone from 'react-dropzone';
const FILE_FIELD_NAME = 'files';

/* https://github.com/BBB/dropzone-redux-form-example */

const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
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
    </div>
  );
}

class EmoteForm extends React.Component {

  //static propTypes = {
   // handleSubmit: PropTypes.func.isRequired,
  //  reset: PropTypes.func.isRequired,
 // };

  onSubmit(data) {
    var body = new FormData();
    Object.keys(data).forEach(( key ) => {
      body.append(key, data[ key ]);
    });

    console.info('POST', body, data);
    console.info('This is expected to fail:');
    fetch(`http://example.com/send/`, {
      method: 'POST',
      body: body,
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }

  render() {
    const {
      handleSubmit,
      reset,
    } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <label htmlFor={FILE_FIELD_NAME}>Files</label>
          <Row>
          <Field
            name={FILE_FIELD_NAME}
            component={renderDropzoneInput}
          />
          </Row>
        </div>

        <Row className='admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Everyone</label>
        </Col>
        <Col md = {4} sm = {4} xs = {4}> 
          <Field
            name='everyone'
            component='input'
            type='checkbox'
          />
        </Col>
      </Row>
      <Row className='admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>T1 Users</label>
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
          <label className='admin_setup__label'>T2 Users</label>
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
          <label className='admin_setup__label'>T3 Users</label>
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
          <label className='admin_setup__label'>T4 Users</label>
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

      <Row className='admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}> 
          <label className='admin_setup__label'>Administrator</label>
        </Col>
        <Col md = {4} sm = {4} xs = {4}> 
          <Field
            name='administrator'
            component='input'
            type='checkbox'
          />
        </Col>
      </Row>


        <div>
          <button type="submit">
            Submit
          </button>
          <button onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'emotes', // a unique identifier for this form
})(EmoteForm);
