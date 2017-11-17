import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

const BotsForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
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
          </Row>

          <Row className='admin_setup__row'>
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
          </Row>

          <Row className='admin_setup__row'>
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
          </Row>


          <Row className='admin_setup__row'>
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
          </Row>

          <Row className='admin_setup__row'>
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
          </Row>
        </Col>
      </Col>


      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
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
          </Row>

          <Row className='admin_setup__row'>
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
          </Row>

          <Row className='admin_setup__row'>
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
          </Row>

          <Row className='admin_setup__row'>
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
          </Row>
        </Col>
      </Col>


      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
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
          </Row>

          <Row className='admin_setup__row'>
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
          </Row>

          <Row className='admin_setup__row'>
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
          </Row>

          <Row className='admin_setup__row'>
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
  form: 'bots', // a unique identifier for this form
})(BotsForm);
