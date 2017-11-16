import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

const ChatForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>



      <Row>
      <Col 
        md={3} 
        mdOffset={1} 
        sm={5} 
        smOffset={1} 
        xs={5} 
        xsOffset={1}
      >
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



      <Col 
        md={3} 
        mdOffset={1} 
        sm={5} 
        smOffset={1} 
        xs={5} 
        xsOffset={1}
      >
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



      <Col 
        md={3} 
        mdOffset={1} 
        sm={5} 
        smOffset={1} 
        xs={5} 
        xsOffset={1}
      >
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



      <Col 
        md={3} 
        mdOffset={1} 
        sm={5} 
        smOffset={1} 
        xs={5} 
        xsOffset={1}
      >
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



      <Col 
        md={3} 
        mdOffset={1} 
        sm={5} 
        smOffset={1} 
        xs={5} 
        xsOffset={1}
      >
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



      <Col 
        md={3} 
        mdOffset={1} 
        sm={5} 
        smOffset={1} 
        xs={5} 
        xsOffset={1}
      >
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



      <Col 
        md={3} 
        mdOffset={1} 
        sm={5} 
        smOffset={1} 
        xs={5} 
        xsOffset={1}
      >
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



      <Col 
        md={3} 
        mdOffset={1} 
        sm={5} 
        smOffset={1} 
        xs={5} 
        xsOffset={1}
      >
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



      <Col 
        md={3} 
        mdOffset={1} 
        sm={5} 
        smOffset={1} 
        xs={5} 
        xsOffset={1}
      >
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



      <Col 
        md={3} 
        mdOffset={1} 
        sm={5} 
        smOffset={1} 
        xs={5} 
        xsOffset={1}
      >
        <label>Character Limit</label> 
          <Field
            name='chatCharacterLimit'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
        />
      </Col>



      <Col 
        md={3} 
        mdOffset={1} 
        sm={5} 
        smOffset={1} 
        xs={5} 
        xsOffset={1}
      >
        <label>Message Delay (Seconds)</label> 
          <Field
            name='chatMessageDelay'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
        />
      </Col>



      <Col 
        md={3} 
        mdOffset={1} 
        sm={5} 
        smOffset={1} 
        xs={5} 
        xsOffset={1}
      >
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
