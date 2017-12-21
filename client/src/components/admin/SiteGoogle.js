import React from 'react';

import {Col} from 'react-bootstrap';

import GetGoogleForm from './forms/GetGoogleForm';
import PostGoogleForm from './forms/PostGoogleForm';
import GetGoogleAppIdForm from './forms/GetGoogleAppIdForm';
import DeleteGoogleAppIdForm from './forms/DeleteGoogleAppIdForm';
import PostGoogleAppIdOauthForm from './forms/PostGoogleAppIdOauthForm';
import GetGoogleAppIdTokensForm from './forms/GetGoogleAppIdTokensForm';
import PostGoogleAppIdTokensForm from './forms/PostGoogleAppIdTokensForm';
import GetGoogleAppIdTokensTokenIdForm from './forms/GetGoogleAppIdTokensTokenIdForm';
import DeleteGoogleAppIdTokensTokenIdForm from './forms/DeleteGoogleAppIdTokensTokenIdForm';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ApiActions from '../../actions/api';
import * as GoogleActions from '../../actions/google';

class SiteGoogle extends React.Component{
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
          <GetGoogleForm 
            onSubmit={values=>this.props.googleAction.getGoogle(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostGoogleForm 
            onSubmit={values=>this.props.googleAction.postGoogle(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetGoogleAppIdForm 
            onSubmit={values=>this.props.googleAction.getGoogleAppId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteGoogleAppIdForm 
            onSubmit={values=>this.props.googleAction.deleteGoogleAppId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostGoogleAppIdOauthForm 
            onSubmit={values=>this.props.googleAction.postGoogleAppIdOauth(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetGoogleAppIdTokensForm 
            onSubmit={values=>this.props.googleAction.getGoogleAppIdTokens(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostGoogleAppIdTokensForm 
            onSubmit={values=>this.props.googleAction.postGoogleAppIdTokens(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetGoogleAppIdTokensTokenIdForm 
            onSubmit={values=>this.props.googleAction.getGoogleAppIdTokensTokenId(values)}
          />
        </Col>
      </Col>
      
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteGoogleAppIdTokensTokenIdForm 
            onSubmit={values=>this.props.googleAction.deleteGoogleAppIdTokensTokenId(values)}
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
    googleAction: bindActionCreators(GoogleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteGoogle);