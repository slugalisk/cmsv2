import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

import {connect} from 'react-redux';

class GetRedditAppidForm extends React.Component{
  render(){

  const { handleChange, pristine, submitting, handleSubmit, value }= this.props;
    return(
      <form onSubmit={handleSubmit}>
        <Row className='admin_setup__row'>
          <label>Get Reddit Appid</label>
          <Field
            name='appId'
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
}

GetRedditAppidForm = reduxForm({
  form: 'getRedditAppid', // a unique identifier for this form
  enableReinitialize: true //necessary to update object in initialValues
})(GetRedditAppidForm);

GetRedditAppidForm = connect(
  state => ({
    initialValues: {
      method: 'GET',
      url:'http://localhost:3000/api/v1/reddit/apps',
      xClientId: state.api.xClientId,
      xToken: state.api.xToken,
     }
  }),          
)(GetRedditAppidForm)



export default GetRedditAppidForm;