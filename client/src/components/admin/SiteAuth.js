import React from 'react';

import {Row, Col} from 'react-bootstrap';
import { Provider } from 'react-redux';

import GetAuthForm from './forms/GetAuthForm';
import PostAuthForm from './forms/PostAuthForm';
import DeleteAuthCredentialsIdForm from './forms/DeleteAuthCredentialsIdForm';
import PostAuthCredentialsIdReplacementsForm from './forms/PostAuthCredentialsIdReplacementsForm';
import PutAuthCredentialsIdReplacementsForm from './forms/PutAuthCredentialsIdReplacementsForm';
import DeleteAuthCredentialsIdReplacementsForm from './forms/DeleteAuthCredentialsIdReplacementsForm';
import PostAuthRecoveryForm from './forms/PostAuthRecoveryForm';
import PostAuthSessionsForm from './forms/PostAuthSessionsForm';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ApiActions from '../../actions/api';
import * as AuthActions from '../../actions/auth';

class SiteAuth extends React.Component{
  testfunc(){
    this.props.action.getApiIfNeeded();
  }
  render(){
    return(
 
    <div className='admin_form_wrapper'>
        <button onClick={()=>this.testfunc()}>test</button>
      <Col 
        md={4} 
        sm={6} 
        xs={12} 
        className='admin_column__1'
      >
      </Col>
      <Col 
        md={4} 
        mdOffset={4} 
        sm={6} 
        smOffset={6} 
        xs={12} 
        xsOffset={0}
        className='admin_column__2'>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetAuthForm 
            onSubmit={values=>this.props.authAction.getAuth(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostAuthForm
            onSubmit={values=>this.props.authAction.postAuth(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteAuthCredentialsIdForm 
            onSubmit={values=>this.props.authAction.deleteAuthCredentialsId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostAuthCredentialsIdReplacementsForm 
            onSubmit={values=>this.props.authAction.postAuthCredentialsIdReplacements(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PutAuthCredentialsIdReplacementsForm 
            onSubmit={values=>this.props.authAction.putAuthCredentialsIdReplacements(values)}
          />
        </Col>
      </Col>
    
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteAuthCredentialsIdReplacementsForm 
            onSubmit={values=>this.props.authAction.deleteAuthCredentialsIdReplacements(values)}
          />
        </Col>
      </Col>
    
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostAuthRecoveryForm 
            onSubmit={values=>this.props.authAction.postAuthRecovery(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostAuthSessionsForm 
            onSubmit={values=>this.props.authAction.postAuthSessions(values)}
          />
        </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(SiteAuth);