import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

const ChatForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>



    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
      <Row className='admin_setup__row'>
        <label>Combos</label>
        <Field 
          name='chatCombos'
          component='select'
          className='admin_form_field'
        >
          <option />
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </Field>
      </Row>

      <Row className='admin_setup__row'>
        <label>Overrustle</label>
        <Field 
          name='chatOverrustle'
          component='select'
          className='admin_form_field'
        >
          <option />
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </Field>
      </Row>

      <Row className='admin_setup__row'>
        <label>Profanity Filter</label>
        <Field 
          name='chatProfanity'
          component='select'
          className='admin_form_field'
        >
          <option />
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </Field>
      </Row>


      <Row className='admin_setup__row'>
        <label>R9K</label>
        <Field 
          name='chatR9K'
          component='select'
          className='admin_form_field'
        >
          <option />
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </Field>
      </Row>
    </Col>
  </Col>



  <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
      <Row className='admin_setup__row'>
        <label>Chat Greentext</label>
        <Field 
          name='chatGreentext'
          component='select'
          className='admin_form_field'
        >
          <option />
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </Field>
      </Row>

      <Row className='admin_setup__row'>
        <label>Allow Emotes</label>
        <Field 
          name='chatEmotes'
          component='select'
          className='admin_form_field'
        >
          <option />
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </Field>
      </Row>



      <Row className='admin_setup__row'>
        <label>Subscribers Only</label>
        <Field 
          name='chatSubsOnly'
          component='select'
          className='admin_form_field'
        >
          <option />
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </Field>
      </Row>



      <Row className='admin_setup__row'>
        <label>Public Chat Logging</label>
        <Field 
          name='chatPublicLogging'
          component='select'
          className='admin_form_field'
        >
          <option />
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </Field>
      </Row>
      </Col>
      </Col>


      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <Row className='admin_setup__row'>
        <label>Allow Links</label>
        <Field 
          name='chatLinks'
          component='select'
          className='admin_form_field'
        >
          <option />
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </Field>
        </Row>

        <Row className='admin_setup__row'>
        <label>Character Limit</label> 
          <Field
            name='chatCharacterLimit'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
        />
        </Row>


        <Row className='admin_setup__row'>
        <label>Message Delay (Seconds)</label> 
          <Field
            name='chatMessageDelay'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
        />
      </Row>



      <Row className='admin_setup__row'>
        <label>Non-Mod Chat Delay (Seconds)</label> 
          <Field
            name='chatNonmodDelay'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
        />
      </Row>
    </Col>
    </Col>

    <Col md={12} mdOffset={0} sm={12} smOffset={0} xs={12} xsOffset={0}>
      <Col md={4} sm={6} xs={12}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_button_wrapper'>
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
};

export default reduxForm({
  form: 'chat', // a unique identifier for this form
})(ChatForm);
