import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

const ChatForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>



    <Row  className='admin_setup__row'>
      <Col md = {5} sm = {12} xs = {12}>
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
      </Col>
    </Row>

    <Row  className='admin_setup__row'>
      <Col md = {5} sm = {12} xs = {12}>
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
      </Col>
    </Row>

    <Row  className='admin_setup__row'>
      <Col md = {5} sm = {12} xs = {12}>
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
      </Col>
    </Row>

    <Row  className='admin_setup__row'>
      <Col md = {5} sm = {12} xs = {12}>
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
      </Col>
    </Row>

    <Row  className='admin_setup__row'>
      <Col md = {5} sm = {12} xs = {12}>
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
      </Col>
    </Row>

    <Row  className='admin_setup__row'>
      <Col md = {5} sm = {12} xs = {12}>
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
      </Col>
    </Row>

    <Row  className='admin_setup__row'>
      <Col md = {5} sm = {12} xs = {12}>
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
      </Col>
    </Row>

    <Row  className='admin_setup__row'>
      <Col md = {5} sm = {12} xs = {12}>
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
      </Col>
    </Row>

    <Row  className='admin_setup__row'>
      <Col md = {5} sm = {12} xs = {12}>
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
      </Col>
    </Row>

    <Row  className='admin_setup__row'>
      <Col md = {5} sm = {12} xs = {12}>
        <label>Character Limit</label> 
          <Field
            name='chatCharacterLimit'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
        />
      </Col>
    </Row>

    <Row  className='admin_setup__row'>
      <Col md = {5} sm = {12} xs = {12}>
        <label>Message Delay (Seconds)</label> 
          <Field
            name='chatMessageDelay'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
        />
      </Col>
    </Row>

    <Row  className='admin_setup__row'>
      <Col md = {5} sm = {12} xs = {12}>
        <label>Non-Mod Chat Delay (Seconds)</label> 
          <Field
            name='chatNonmodDelay'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
        />
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
          onClick={reset}
          className='admin_button'
        >
          Clear Values
        </Button>
      </Row>
    </form>
  );
};

export default reduxForm({
  form: 'chat', // a unique identifier for this form
})(ChatForm);
