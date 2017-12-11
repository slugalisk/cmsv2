import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

class GetTwitchAppidTokensTokenidForm extends React.Component {
  render(){

  const { handleSubmit, pristine, submitting } = this.props;


  return (
    <form onSubmit={handleSubmit}>


        <Row className='admin_setup__row'>
          <label>Get Twitch Appid Tokens Tokenid Appid</label>
          <Field
            name='GetTwitchAppidTokensTokenidAppid'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
          />
        </Row>
        <Row className='admin_setup__row'>
          <label>Get Twitch Appid Tokens Tokenid Tokenid</label>
          <Field
            name='GetTwitchAppidTokensTokenidTokenid'
            component='input'
            type='text'
            placeholder=''
            className='admin_form_field'
          />
        </Row>

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

          </Row>
        </Col>
      </Col>
    </Col>

      
    </form>
  );
}
};

export default reduxForm({
  form: 'getTwitchAppidTokensTokenid', // a unique identifier for this form
})(GetTwitchAppidTokensTokenidForm);
