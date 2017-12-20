import React from 'react';

import {Col} from 'react-bootstrap';

import apiRequest from './components/apiRequest';

import postTwitch from './components/postTwitch';

import deleteTwitchAppid from './components/deleteTwitchAppid';
import postTwitchAppidOauth from './components/postTwitchAppidOauth';
import postTwitchAppidTokens from './components/postTwitchAppidTokens';
import deleteTwitchAppidTokensTokenid from './components/deleteTwitchAppidTokensTokenid';


import GetTwitchForm from './forms/GetTwitchForm';
import PostTwitchForm from './forms/PostTwitchForm';
import GetTwitchAppidForm from './forms/GetTwitchAppidForm';
import DeleteTwitchAppidForm from './forms/DeleteTwitchAppidForm';
import PostTwitchAppidOauthForm from './forms/PostTwitchAppidOauthForm';
import GetTwitchAppidTokensForm from './forms/GetTwitchAppidTokensForm';
import PostTwitchAppidTokensForm from './forms/PostTwitchAppidTokensForm';
import GetTwitchAppidTokensTokenidForm from './forms/GetTwitchAppidTokensTokenidForm';
import DeleteTwitchAppidTokensTokenidForm from './forms/DeleteTwitchAppidTokensTokenidForm';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ApiActions from '../../actions/api';
import * as TwitchActions from '../../actions/twitch';

class SiteTwitch extends React.Component{
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
          <GetTwitchForm onSubmit={values=>this.props.twitchAction.getTwitch(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitchForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitchAppidForm onSubmit={values=>this.props.twitchAction.getTwitchAppId(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteTwitchAppidForm onSubmit={deleteTwitchAppid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitchAppidOauthForm onSubmit={postTwitchAppidOauth}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitchAppidTokensForm onSubmit={values=>this.props.twitchAction.getTwitchAppIdTokens(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitchAppidTokensForm onSubmit={postTwitchAppidTokens}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitchAppidTokensTokenidForm onSubmit={values=>this.props.twitchAction.getTwitchAppIdTokensTokenId(values)}/>
        </Col>
      </Col>
      
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteTwitchAppidTokensTokenidForm onSubmit={deleteTwitchAppidTokensTokenid}/>
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
    twitchAction: bindActionCreators(TwitchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteTwitch);