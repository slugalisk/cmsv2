import React from 'react';

import {Col} from 'react-bootstrap';

import getReddit from './components/getReddit';
import postReddit from './components/postReddit';
import getRedditAppid from './components/getRedditAppid';
import deleteRedditAppid from './components/deleteRedditAppid';
import postRedditAppidOauth from './components/postRedditAppidOauth';
import getRedditAppidTokens from './components/getRedditAppidTokens';
import postRedditAppidTokens from './components/postRedditAppidTokens';
import getRedditAppidTokensTokenid from './components/getRedditAppidTokensTokenid';
import deleteRedditAppidTokensTokenid from './components/deleteRedditAppidTokensTokenid';
import getRedditAppidWidgets from './components/getRedditAppidWidgets';
import postRedditAppidWidgets from './components/postRedditAppidWidgets';
import deleteRedditAppidWidgetsWidgetid from './components/deleteRedditAppidWidgetsWidgetid';
import getRedditAppidWidgetsWidgetid from './components/getRedditAppidWidgetsWidgetid';
import getRedditAppidWidgetsWidgetidFeed from './components/getRedditAppidWidgetsWidgetidFeed';

import GetRedditForm from './forms/GetRedditForm';
import PostRedditForm from './forms/PostRedditForm';
import GetRedditAppidForm from './forms/GetRedditAppidForm';
import DeleteRedditAppidForm from './forms/DeleteRedditAppidForm';
import PostRedditAppidOauthForm from './forms/PostRedditAppidOauthForm';
import GetRedditAppidTokensForm from './forms/GetRedditAppidTokensForm';
import PostRedditAppidTokensForm from './forms/PostRedditAppidTokensForm';
import GetRedditAppidTokensTokenidForm from './forms/GetRedditAppidTokensTokenidForm';
import DeleteRedditAppidTokensTokenidForm from './forms/DeleteRedditAppidTokensTokenidForm';
import GetRedditAppidWidgetsForm from './forms/GetRedditAppidWidgetsForm';
import PostRedditAppidWidgetsForm from './forms/PostRedditAppidWidgetsForm';
import DeleteRedditAppidWidgetsWidgetidForm from './forms/DeleteRedditAppidWidgetsWidgetidForm';
import GetRedditAppidWidgetsWidgetidForm from './forms/GetRedditAppidWidgetsWidgetidForm';
import GetRedditAppidWidgetsWidgetidFeedForm from './forms/GetRedditAppidWidgetsWidgetidFeedForm';

export default class SiteReddit extends React.Component{
  render(){
    return(
 
    <div className='admin_form_wrapper'>
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
          <GetRedditForm onSubmit={getReddit}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostRedditForm onSubmit={postReddit}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetRedditAppidForm onSubmit={getRedditAppid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteRedditAppidForm onSubmit={deleteRedditAppid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostRedditAppidOauthForm onSubmit={postRedditAppidOauth}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetRedditAppidTokensForm onSubmit={getRedditAppidTokens}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostRedditAppidTokensForm onSubmit={postRedditAppidTokens}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetRedditAppidTokensTokenidForm onSubmit={getRedditAppidTokensTokenid}/>
        </Col>
      </Col>
      
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteRedditAppidTokensTokenidForm onSubmit={deleteRedditAppidTokensTokenid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetRedditAppidWidgetsForm onSubmit={getRedditAppidWidgets}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostRedditAppidWidgetsForm onSubmit={postRedditAppidWidgets}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteRedditAppidWidgetsWidgetidForm onSubmit={deleteRedditAppidWidgetsWidgetid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetRedditAppidWidgetsWidgetidForm onSubmit={getRedditAppidWidgetsWidgetid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetRedditAppidWidgetsWidgetidFeedForm onSubmit={getRedditAppidWidgetsWidgetidFeed}/>
        </Col>
      </Col>
    </div>
    );
  }
}
