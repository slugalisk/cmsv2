import React from 'react';
import { Field, reduxForm, formValueSelector, getFormValues } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

import {connect} from 'react-redux';
import {compose} from 'redux';

class GetTwitchAppidForm extends React.Component{
  render(){

  const { handleChange, pristine, submitting, handleSubmit, value }= this.props;
    return(
      <form onSubmit={handleSubmit}>
        <Row className='admin_setup__row'>
          <label>Get Twitch Appid</label>
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


function mapStateToProps(state, prop){
  console.log(state);
  /*the name of the reducer*/
  return{
    initialValues: {
      method: 'GET',
      url:'http://localhost:3000/api/v1/twitch/apps/'
      /*
       + 
        (state.form.getTwitchAppid 
          ? 
          state.form.getTwitchAppid.values.appId
          //state.form.getTwitchAppid.values.appId 
          :
          0
        )
        */,
      xClientId: state.api.xClientId,
      xToken: state.api.xToken,
     },

  }
}

/*
GetTwitchAppidForm = reduxForm({
  form: 'getTwitchAppid', // a unique identifier for this form
  enableReinitialize: true //necessary to update object in initialValues
}, mapStateToProps)(GetTwitchAppidForm);
*/

/*
GetTwitchAppidForm = connect(
  state => ({
    initialValues: {
      method: 'GET',
      url:'http://localhost:3000/api/v1/twitch/apps',
      xClientId: state.api.xClientId,
      xToken: state.api.xToken,
     }
  }),          
)(GetTwitchAppidForm)
*/

/*
export default GetTwitchAppidForm;
*/
export default connect( mapStateToProps )(
  reduxForm({
      form: 'getTwitchAppid',
      enableReinitialize : true
  })(GetTwitchAppidForm)
);