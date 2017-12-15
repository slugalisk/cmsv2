import React from 'react';
import { reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ApiActions from '../../../actions/api';

let GetGoogleForm = ({ handleChange, handleSubmit, value }) => (
  <form onSubmit={handleSubmit}>
    <Row className='admin_setup__row'>
      <label>Get Google</label>
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

function mapStateToProps(state, prop){
  /*the name of the reducer*/
  return{
    xClientId: state.api.xClientId,
    xToken: state.api.xToken,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(ApiActions, dispatch)
  }
}

GetGoogleForm = reduxForm({
  form: 'getGoogle', // a unique identifier for this form
  enableReinitialize: true //necessary to update object in initialValues
})(GetGoogleForm);

GetGoogleForm = connect(
  state => ({
    initialValues: {
      url:'http://localhost:3000/api/v1/google/apps',
      clientid: state.api.xClientId,
      token: state.api.xToken,
     }
  }),          
)(GetGoogleForm)



export default GetGoogleForm