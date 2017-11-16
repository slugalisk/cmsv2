import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

const BotsForm = props => {
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
        <label>Twitter Stream</label>
        <Field 
          name='botsTwitterStream'
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
        <label>!tweet</label>
        <Field 
          name='botsTweet'
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
        <label>!stream / !live</label>
        <Field 
          name='botsLive'
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
        <label>!schedule</label>
        <Field 
          name='botsSchedule'
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
        <label>!song (Requires Last.FM)</label>
        <Field 
          name='botsSong'
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
        <label>!logs [username]</label>
        <Field 
          name='botsLogs'
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
        <label>!poll</label>
        <Field 
          name='botsPoll'
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
        <label>!nuke [word]</label>
        <Field 
          name='botsNuke'
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
        <label>!banned (Shows 24h Banlist)</label>
        <Field 
          name='botsBanned'
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
        <label>!slowmode</label> 
        <Field 
          name='botsSlowMode'
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
        <label>!submode</label> 
          <Field 
            name='botsSubMode'
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
        <label>!aegis</label> 
        <Field 
          name='botsAegis'
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
        <label>!ip [x] (hours)</label> 
        <Field 
          name='botsIPBan'
          component='select'
          className='admin_form_field'
        >
          <option />
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </Field>
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
  form: 'bots', // a unique identifier for this form
})(BotsForm);
