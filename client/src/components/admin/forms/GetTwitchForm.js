import React from 'react';
import { reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ApiActions from '../../../actions/api';



  let GetTwitchForm = ({ handleChange, handleSubmit, value }) => (
    <form onSubmit={handleSubmit}>
      <Row className='admin_setup__row'>
        <label>Get Twitch</label>
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

GetTwitchForm = reduxForm({
  form: 'getTwitch', // a unique identifier for this form
})(GetTwitchForm);

GetTwitchForm = connect(
  state => ({
    initialValues: state.api.xClientId, // pull initial values from account reducer
  }),             
)(GetTwitchForm)

/*
//const selector = formValueSelector('selectingFormValues') // <-- same as form name
GetTwitchForm = connect(
  state => {
  // can select values individually
  const testValue = 'asdf'
})(GetTwitchForm)

GetTwitchForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetTwitchForm);
*/


export default GetTwitchForm