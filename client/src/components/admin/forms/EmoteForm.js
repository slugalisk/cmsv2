import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

import Dropzone from 'react-dropzone';
const FILE_FIELD_NAME = 'files';

/* https://github.com/BBB/dropzone-redux-form-example */

const renderDropzoneInput = (field) => {
  const files = field.input.value;

  return (
    <div className='admin_dropzone'>
      <div className='admin_dropzone_area'>
      <Row>
        <Dropzone
          name={field.name}
          onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
          className='dropzone_style'
        >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </Row>
        {field.meta.touched &&
          field.meta.error &&
          <span className="error">{field.meta.error}</span>}
        {files && Array.isArray(files) && (
            <div>
            { files.map((file, i) =>
              <div key={i}>

                <div className='admin_setup__row'>
                  <strong>File Name:</strong><br/>
                   {file.name}
                </div>

                <div className='admin_setup__row'>
                  <strong>Image Preview:</strong> <br/>
                  <img 
                    src={file.preview} 
                    alt='preview'
                    className='admin_dropzone_preview__200'
                  />
                </div>

                <div className='admin_setup__row'>
                  <strong>Emote Preview:</strong><br/>
                  <img 
                    src={file.preview} 
                    alt='preview'
                    className='admin_dropzone_preview__32'
                  />
                </div>

              </div>
          ) }
        </div>
        )}
        </div>
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

    const { handleSubmit, 
      pristine, 
      reset, 
      submitting,
    } = this.props;

    return (
      <form 
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        className='admin_form_wrapper'
      >

        <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={10} xsOffset={1}>
          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>Everyone</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='everyone'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>T1 Users</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='t1Users'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>T2 Users</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='t2Users'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>T3 Users</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='t3Users'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>T4 Users</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='t4Users'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>Moderators</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='moderators'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={6} className='admin_setup__row'>
              <label className='admin_setup__label'>Administrator</label>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Field
                name='administrator'
                component='input'
                type='checkbox'
              />
            </Col>
          </Row>
        </Col>

        <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={10} xsOffset={1}>
          <Row>
            <Field
              name={FILE_FIELD_NAME}
              component={renderDropzoneInput}
            />
          </Row>
        </Col>
        

        <Col md={12} mdOffset={0} sm={12} smOffset={0} xs={12} xsOffset={0}>
          <Col md={4} sm={6} xs={12}>
            <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
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
            </Col>
          </Col>
        </Col>

      </form>
    );
  }
}

export default reduxForm({
  form: 'emotes', // a unique identifier for this form
})(EmoteForm);
