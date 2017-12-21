import React from 'react';

import {Col} from 'react-bootstrap';

import GetTwitchForm from './forms/GetTwitchForm';
import PostTwitchForm from './forms/PostTwitchForm';
import GetTwitchAppIdForm from './forms/GetTwitchAppIdForm';
import DeleteTwitchAppIdForm from './forms/DeleteTwitchAppIdForm';
import PostTwitchAppIdOauthForm from './forms/PostTwitchAppIdOauthForm';
import GetTwitchAppIdTokensForm from './forms/GetTwitchAppIdTokensForm';
import PostTwitchAppIdTokensForm from './forms/PostTwitchAppIdTokensForm';
import GetTwitchAppIdTokensTokenIdForm from './forms/GetTwitchAppIdTokensTokenIdForm';
import DeleteTwitchAppIdTokensTokenIdForm from './forms/DeleteTwitchAppIdTokensTokenIdForm';

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
          <PostTwitchForm onSubmit={values=>this.props.twitchAction.postTwitch(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitchAppIdForm onSubmit={values=>this.props.twitchAction.getTwitchAppId(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteTwitchAppIdForm onSubmit={values=>this.props.twitchAction.deleteTwitchAppId(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitchAppIdOauthForm onSubmit={values=>this.props.twitchAction.postTwitchAppIdOauth(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitchAppIdTokensForm onSubmit={values=>this.props.twitchAction.getTwitchAppIdTokens(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitchAppIdTokensForm onSubmit={values=>this.props.twitchAction.postTwitchAppIdTokens(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitchAppIdTokensTokenIdForm onSubmit={values=>this.props.twitchAction.getTwitchAppIdTokensTokenId(values)}/>
        </Col>
      </Col>
      
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteTwitchAppIdTokensTokenIdForm onSubmit={values=>this.props.twitchAction.deleteTwitchAppIdTokensTokenId(values)}/>
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