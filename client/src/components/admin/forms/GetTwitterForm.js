import React from 'react';
import { reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ApiActions from '../../../actions/api';

let GetTwitterForm = ({ handleChange, handleSubmit, value }) => (
  <form onSubmit={handleSubmit}>
    <Row className='admin_setup__row'>
      <label>Get Twitter</label>
    </Row>
    <Col md={12} mdOffset={0} sm={12} smOffset={0} xs={12} xsOffset={0}>
      <Col md={4} sm={6} xs={12}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_button_wrapper'>
            <Button 
              bsStyle='success' 
              type='submit'
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

GetTwitterForm = reduxForm({
  form: 'getTwitter', // a unique identifier for this form
  enableReinitialize: true //necessary to update object in initialValues
})(GetTwitterForm);

GetTwitterForm = connect(
  state => ({
    initialValues: {
      method: 'GET',
      url:'http://localhost:3000/api/v1/twitter/apps',
      xClientId: state.api.xClientId,
      xToken: state.api.xToken,
     }
  }),          
)(GetTwitterForm)



export default GetTwitterForm