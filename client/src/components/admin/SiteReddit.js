import React from 'react';

import {Col} from 'react-bootstrap';

import GetRedditForm from './forms/GetRedditForm';
import PostRedditForm from './forms/PostRedditForm';
import GetRedditAppIdForm from './forms/GetRedditAppIdForm';
import DeleteRedditAppIdForm from './forms/DeleteRedditAppIdForm';
import PostRedditAppIdOauthForm from './forms/PostRedditAppIdOauthForm';
import GetRedditAppIdTokensForm from './forms/GetRedditAppIdTokensForm';
import PostRedditAppIdTokensForm from './forms/PostRedditAppIdTokensForm';
import GetRedditAppIdTokensTokenIdForm from './forms/GetRedditAppIdTokensTokenIdForm';
import DeleteRedditAppIdTokensTokenIdForm from './forms/DeleteRedditAppIdTokensTokenIdForm';
import GetRedditAppIdWidgetsForm from './forms/GetRedditAppIdWidgetsForm';
import PostRedditAppIdWidgetsForm from './forms/PostRedditAppIdWidgetsForm';
import GetRedditAppIdWidgetsWidgetIdForm from './forms/GetRedditAppIdWidgetsWidgetIdForm';
import PutRedditAppIdWidgetsWidgetIdForm from './forms/PutRedditAppIdWidgetsWidgetIdForm';
import DeleteRedditAppIdWidgetsWidgetIdForm from './forms/DeleteRedditAppIdWidgetsWidgetIdForm';

import GetRedditAppIdWidgetsWidgetIdFeedForm from './forms/GetRedditAppIdWidgetsWidgetIdFeedForm';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ApiActions from '../../actions/api';
import * as RedditActions from '../../actions/reddit';

class SiteReddit extends React.Component{
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
        <GetRedditForm 
          onSubmit={values=>this.props.redditAction.getReddit(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <PostRedditForm 
          onSubmit={values=>this.props.redditAction.postReddit(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <GetRedditAppIdForm 
          onSubmit={values=>this.props.redditAction.getRedditAppId(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <DeleteRedditAppIdForm 
          onSubmit={values=>this.props.redditAction.deleteRedditAppId(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <PostRedditAppIdOauthForm 
          onSubmit={values=>this.props.redditAction.postRedditAppIdOauth(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <GetRedditAppIdTokensForm 
          onSubmit={values=>this.props.redditAction.getRedditAppIdTokens(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <PostRedditAppIdTokensForm 
          onSubmit={values=>this.props.redditAction.postRedditAppIdTokens(values)}
        />
      </Col>
    </Col>

    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <GetRedditAppIdTokensTokenIdForm 
          onSubmit={values=>this.props.redditAction.getRedditAppIdTokensTokenId(values)}
        />
      </Col>
    </Col>
    
    <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <DeleteRedditAppIdTokensTokenIdForm 
          onSubmit={values=>this.props.redditAction.deleteRedditAppIdTokensTokenId(values)}
        />
      </Col>
    </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetRedditAppIdWidgetsForm 
            onSubmit={values=>this.props.redditAction.getRedditAppIdWidgets(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostRedditAppIdWidgetsForm 
            onSubmit={values=>this.props.redditAction.postRedditAppIdWidgets(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetRedditAppIdWidgetsWidgetIdForm 
            onSubmit={values=>this.props.redditAction.getRedditAppIdWidgetsWidgetId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PutRedditAppIdWidgetsWidgetIdForm 
            onSubmit={values=>this.props.redditAction.putRedditAppIdWidgetsWidgetId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteRedditAppIdWidgetsWidgetIdForm 
            onSubmit={values=>this.props.redditAction.deleteRedditAppIdWidgetsWidgetId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetRedditAppIdWidgetsWidgetIdFeedForm 
            onSubmit={values=>this.props.redditAction.getRedditAppIdWidgetsWidgetIdFeed(values)}
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
    redditAction: bindActionCreators(RedditActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteReddit);