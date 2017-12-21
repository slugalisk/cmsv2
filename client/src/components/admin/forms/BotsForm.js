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
            <Row>
              <label>
                  Twitter Stream
              </label>
            </Row>
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
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
            <Row>
              <label>
                !tweet
              </label>
            </Row>
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
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
            <Row>
              <label>
                !stream / !live
              </label>
            </Row>
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
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
            <Row>
              <label>
                !schedule
              </label>
            </Row>
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
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
            <Row>
              <label>
                !ip [x] (hours)
              </label>
            </Row> 
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
            <Row>
              <label>
                !song (Requires Last.FM)
              </label>
            </Row>
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
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
            <Row>
              <label>
                !logs [username]
              </label>
            </Row>
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
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
            <Row>
              <label>
                !poll
              </label>
            </Row>
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
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
            <Row>
              <label>
                !nuke [word]
              </label>
            </Row>
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
            <Row>
              <label>
                !banned (Shows 24h Banlist)
              </label>
            </Row>
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
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
            <Row>
              <label>
                !slowmode
              </label>
            </Row> 
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
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
            <Row>
              <label>
                !submode
              </label>
            </Row> 
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
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_setup__row'>
            <Row>
              <label>
                !aegis
              </label>
            </Row> 
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
