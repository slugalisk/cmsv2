import React from 'react';

import {Col} from 'react-bootstrap';

import GetTwitterForm from './forms/GetTwitterForm';
import PostTwitterForm from './forms/PostTwitterForm';
import GetTwitterAppIdForm from './forms/GetTwitterAppIdForm';
import DeleteTwitterAppIdForm from './forms/DeleteTwitterAppIdForm';
import PostTwitterAppIdOauthForm from './forms/PostTwitterAppIdOauthForm';
import GetTwitterAppIdTokensForm from './forms/GetTwitterAppIdTokensForm';
import PostTwitterAppIdTokensForm from './forms/PostTwitterAppIdTokensForm';
import GetTwitterAppIdTokensTokenIdForm from './forms/GetTwitterAppIdTokensTokenIdForm';
import DeleteTwitterAppIdTokensTokenIdForm from './forms/DeleteTwitterAppIdTokensTokenIdForm';
import GetTwitterAppIdWidgetsForm from './forms/GetTwitterAppIdWidgetsForm';
import PostTwitterAppIdWidgetsForm from './forms/PostTwitterAppIdWidgetsForm';
import GetTwitterAppIdWidgetsWidgetIdForm from './forms/GetTwitterAppIdWidgetsWidgetIdForm';
import PutTwitterAppIdWidgetsWidgetIdForm from './forms/PutTwitterAppIdWidgetsWidgetIdForm';
import DeleteTwitterAppIdWidgetsWidgetIdForm from './forms/DeleteTwitterAppIdWidgetsWidgetIdForm';

import GetTwitterAppIdWidgetsWidgetIdFeedForm from './forms/GetTwitterAppIdWidgetsWidgetIdFeedForm';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ApiActions from '../../actions/api';
import * as TwitterActions from '../../actions/twitter';

class SiteTwitter extends React.Component{
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
        <GetTwitterForm 
          onSubmit={values=>this.props.twitterAction.getTwitter(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <PostTwitterForm 
          onSubmit={values=>this.props.twitterAction.postTwitter(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <GetTwitterAppIdForm 
          onSubmit={values=>this.props.twitterAction.getTwitterAppId(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <DeleteTwitterAppIdForm 
          onSubmit={values=>this.props.twitterAction.deleteTwitterAppId(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <PostTwitterAppIdOauthForm 
          onSubmit={values=>this.props.twitterAction.postTwitterAppIdOauth(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <GetTwitterAppIdTokensForm 
          onSubmit={values=>this.props.twitterAction.getTwitterAppIdTokens(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <PostTwitterAppIdTokensForm 
          onSubmit={values=>this.props.twitterAction.postTwitterAppIdTokens(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <GetTwitterAppIdTokensTokenIdForm 
          onSubmit={values=>this.props.twitterAction.getTwitterAppIdTokensTokenId(values)}
        />
      </Col>
    </Col>
    
    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <DeleteTwitterAppIdTokensTokenIdForm 
          onSubmit={values=>this.props.twitterAction.deleteTwitterAppIdTokensTokenId(values)}
        />
      </Col>
    </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppIdWidgetsForm 
            onSubmit={values=>this.props.twitterAction.getTwitterAppIdWidgets(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitterAppIdWidgetsForm 
            onSubmit={values=>this.props.twitterAction.postTwitterAppIdWidgets(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppIdWidgetsWidgetIdForm 
            onSubmit={values=>this.props.twitterAction.getTwitterAppIdWidgetsWidgetId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PutTwitterAppIdWidgetsWidgetIdForm 
            onSubmit={values=>this.props.twitterAction.putTwitterAppIdWidgetsWidgetId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteTwitterAppIdWidgetsWidgetIdForm 
            onSubmit={values=>this.props.twitterAction.deleteTwitterAppIdWidgetsWidgetId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppIdWidgetsWidgetIdFeedForm 
            onSubmit={values=>this.props.twitterAction.getTwitterAppIdWidgetsWidgetIdFeed(values)}
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
    twitterAction: bindActionCreators(TwitterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteTwitter);