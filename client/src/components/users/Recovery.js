import React from 'react';

import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import RecoveryForm from './forms/RecoveryForm';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ApiActions from '../../actions/api';
import * as AuthActions from '../../actions/auth';


class Recovery extends React.Component{
  render(){
    return(
 
    <div>
      <Col 
        md={4} 
        mdOffset={4} 
        sm={6} 
        smOffset={3} 
        xs={10} 
        xsOffset={1}
      >
        <div className='login_wrapper'>
          <h2 
            className='form_title'
          >
            Recover Password
          </h2>
          <RecoveryForm 
            onSubmit={values=>this.props.authAction.postAuthRecovery(values)}
          />
          
        </div>
      </Col>
    </div>
    );
  }
}

function mapStateToProps(state, prop){
  /*the name of the reducer*/
  return{
    xClientId: state.api.xClientId,
    xToken: state.api.xToken,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(ApiActions, dispatch),
    authAction: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recovery);