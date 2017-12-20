import React from 'react';

import {Col} from 'react-bootstrap';

import GetGoogleForm from './forms/GetGoogleForm';
import PostGoogleForm from './forms/PostGoogleForm';
import GetGoogleAppidForm from './forms/GetGoogleAppidForm';
import DeleteGoogleAppidForm from './forms/DeleteGoogleAppidForm';
import PostGoogleAppidOauthForm from './forms/PostGoogleAppidOauthForm';
import GetGoogleAppidTokensForm from './forms/GetGoogleAppidTokensForm';
import PostGoogleAppidTokensForm from './forms/PostGoogleAppidTokensForm';
import GetGoogleAppidTokensTokenidForm from './forms/GetGoogleAppidTokensTokenidForm';
import DeleteGoogleAppidTokensTokenidForm from './forms/DeleteGoogleAppidTokensTokenidForm';

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
          <GetGoogleForm onSubmit={values=>this.props.twitchAction.getGoogle(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostGoogleForm onSubmit={values=>this.props.twitchAction.postGoogle(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetGoogleAppidForm onSubmit={values=>this.props.twitchAction.getGoogleAppId(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteGoogleAppidForm onSubmit={values=>this.props.twitchAction.deleteGoogleAppId(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostGoogleAppidOauthForm onSubmit={values=>this.props.twitchAction.postGoogleAppIdOauth(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetGoogleAppidTokensForm onSubmit={values=>this.props.twitchAction.getGoogleAppIdTokens(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostGoogleAppidTokensForm onSubmit={values=>this.props.twitchAction.postGoogleAppIdTokens(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetGoogleAppidTokensTokenidForm onSubmit={values=>this.props.twitchAction.getGoogleAppIdTokensTokenId(values)}/>
        </Col>
      </Col>
      
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteGoogleAppidTokensTokenidForm onSubmit={values=>this.props.twitchAction.deleteGoogleAppIdTokensTokenId(values)}/>
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
    twitchAction: bindActionCreators(GoogleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteGoogle);