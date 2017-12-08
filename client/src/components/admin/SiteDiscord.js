import React from 'react';

import {Col} from 'react-bootstrap';

import getReddit from './components/getReddit';
import postReddit from './components/postReddit';
import getRedditAppid from './components/getRedditAppid';
import deleteRedditAppid from './components/deleteRedditAppid';
import postRedditAppidOauth from './components/postRedditAppidOauth';
import getRedditAppidTokens from './components/getRedditAppidTokens';
import postRedditAppidTokens from './components/postRedditAppidTokens';
import getRedditAppidTokenid from './components/getRedditAppidTokenid';
import deleteRedditAppidTokenid from './components/deleteRedditAppidTokenid';
import getRedditAppidWidgets from './components/getRedditAppidWidgets';
import postRedditAppidWidgets from './components/postRedditAppidWidgets';
import deleteRedditAppidWidgets from './components/deleteRedditAppidWidgets';
import getRedditAppidWidgetid from './components/getRedditAppidWidgetid';
import getRedditAppidWidgetidFeed from './components/getRedditAppidWidgetidFeed';

import GetRedditForm from './forms/GetRedditForm';
import PostRedditForm from './forms/PostRedditForm';
import GetRedditAppidForm from './forms/GetRedditAppidForm';
import DeleteRedditAppidForm from './forms/DeleteRedditAppidForm';
import PostRedditAppidOauthForm from './forms/PostRedditAppidOauthForm';
import GetRedditAppidTokensForm from './forms/GetRedditAppidTokensForm';
import PostRedditAppidTokensForm from './forms/PostRedditAppidTokensForm';
import GetRedditAppidTokenidForm from './forms/GetRedditAppidTokenidForm';
import DeleteRedditAppidTokenidForm from './forms/DeleteRedditAppidTokenidForm';
import GetRedditAppidWidgetsForm from './forms/GetRedditAppidWidgetsForm';
import PostRedditAppidWidgetsForm from './forms/PostRedditAppidWidgetsForm';
import DeleteRedditAppidWidgetsForm from './forms/DeleteRedditAppidWidgetsForm';
import GetRedditAppidWidgetidForm from './forms/GetRedditAppidWidgetidForm';
import GetRedditAppidWidgetidFeedForm from './forms/GetRedditAppidWidgetidFeedForm';

export default class SiteDiscord extends React.Component{
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
          <GetRedditAppidTokenidForm onSubmit={getRedditAppidTokenid}/>
        </Col>
      </Col>
      
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteRedditAppidTokenidForm onSubmit={deleteRedditAppidTokenid}/>
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
          <DeleteRedditAppidWidgetsForm onSubmit={deleteRedditAppidWidgets}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetRedditAppidWidgetidForm onSubmit={getRedditAppidWidgetid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetRedditAppidWidgetidFeedForm onSubmit={getRedditAppidWidgetidFeed}/>
        </Col>
      </Col>
    </div>
    );
  }
}
