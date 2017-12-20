import React from 'react';

import {Col} from 'react-bootstrap';

import GetDiscordForm from './forms/GetDiscordForm';
import PostDiscordForm from './forms/PostDiscordForm';
import GetDiscordAppidForm from './forms/GetDiscordAppidForm';
import DeleteDiscordAppidForm from './forms/DeleteDiscordAppidForm';
import PostDiscordAppidOauthForm from './forms/PostDiscordAppidOauthForm';
import GetDiscordAppidTokensForm from './forms/GetDiscordAppidTokensForm';
import PostDiscordAppidTokensForm from './forms/PostDiscordAppidTokensForm';
import GetDiscordAppidTokensTokenidForm from './forms/GetDiscordAppidTokensTokenidForm';
import DeleteDiscordAppidTokensTokenidForm from './forms/DeleteDiscordAppidTokensTokenidForm';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ApiActions from '../../actions/api';
import * as DiscordActions from '../../actions/discord';


class SiteDiscord extends React.Component{
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
          <GetDiscordForm onSubmit={values=>this.props.discordAction.getDiscord(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostDiscordForm onSubmit={values=>this.props.discordAction.postTwitch(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetDiscordAppidForm onSubmit={values=>this.props.discordAction.getDiscordppId(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteDiscordAppidForm onSubmit={values=>this.props.discordAction.deleteDiscordppId(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostDiscordAppidOauthForm onSubmit={values=>this.props.discordAction.postDiscordppId(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetDiscordAppidTokensForm onSubmit={values=>this.props.discordAction.getDiscordppIdTokens(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostDiscordAppidTokensForm onSubmit={values=>this.props.discordAction.postDiscordppIdTokens(values)}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetDiscordAppidTokensTokenidForm onSubmit={values=>this.props.discordAction.getDiscordppIdTokensTokenId(values)}/>
        </Col>
      </Col>
      
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteDiscordAppidTokensTokenidForm onSubmit={values=>this.props.discordAction.deleteDiscordppIdTokensTokenId(values)}/>
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
    discordAction: bindActionCreators(DiscordActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteDiscord);