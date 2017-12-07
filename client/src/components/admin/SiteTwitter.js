import React from 'react';

import {Row, Col} from 'react-bootstrap';
import { Provider } from 'react-redux';

import getTwitter from './components/getTwitter';
import postTwitter from './components/postTwitter';
import getTwitterAppid from './components/getTwitterAppid';
import deleteTwitterAppid from './components/deleteTwitterAppid';
import postTwitterAppidOauth from './components/postTwitterAppidOauth';
import getTwitterAppidTokens from './components/getTwitterAppidTokens';
import postTwitterAppidTokens from './components/postTwitterAppidTokens';
import getTwitterAppidTokensTokenid from './components/getTwitterAppidTokensTokenid';
import putTwitterAppidTokensTokenid from './components/putTwitterAppidTokensTokenid';
import deleteTwitterAppidTokensTokenid from './components/deleteTwitterAppidTokensTokenid';
import getTwitterAppidWidgets from './components/getTwitterAppidWidgets';
import postTwitterAppidWidgets from './components/postTwitterAppidWidgets';
import getTwitterAppidWidgetsWidgetid from './components/getTwitterAppidWidgetsWidgetid';
import putTwitterAppidWidgetsWidgetid from './components/putTwitterAppidWidgetsWidgetid';


import GetTwitterForm from './forms/GetTwitterForm';
import PostTwitterForm from './forms/PostTwitterForm';
import GetTwitterAppidForm from './forms/GetTwitterAppidForm';
import DeleteTwitterAppidForm from './forms/DeleteTwitterAppidForm';
import PostTwitterAppidOauthForm from './forms/PostTwitterAppidOauthForm';
import GetTwitterAppidTokensForm from './forms/GetTwitterAppidTokensForm';
import PostTwitterAppidTokensForm from './forms/PostTwitterAppidTokensForm';
import GetTwitterAppidTokensTokenidForm from './forms/GetTwitterAppidTokensTokenidForm';
import PutTwitterAppidTokensTokenidForm from './forms/PutTwitterAppidTokensTokenidForm';
import DeleteTwitterAppidTokensTokenidForm from './forms/DeleteTwitterAppidTokensTokenidForm';
import GetTwitterAppidWidgetsForm from './forms/GetTwitterAppidWidgetsForm';
import PostTwitterAppidWidgetsForm from './forms/PostTwitterAppidWidgetsForm';
import GetTwitterAppidWidgetsWidgetidForm from './forms/GetTwitterAppidWidgetsWidgetidForm';
import PutTwitterAppidWidgetsWidgetidForm from './forms/PutTwitterAppidWidgetsWidgetidForm';

export default class SiteTwitter extends React.Component{
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
          <GetTwitterForm onSubmit={getTwitter}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitterForm onSubmit={postTwitter}/>
        </Col>
      </Col>
      
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppidForm onSubmit={getTwitterAppid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteTwitterAppidForm onSubmit={deleteTwitterAppid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitterAppidOauthForm onSubmit={postTwitterAppidOauth}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppidTokensForm onSubmit={getTwitterAppidTokens}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitterAppidTokensForm onSubmit={postTwitterAppidTokens}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppidTokensTokenidForm onSubmit={getTwitterAppidTokensTokenid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PutTwitterAppidTokensTokenidForm onSubmit={putTwitterAppidTokensTokenid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteTwitterAppidTokensTokenidForm onSubmit={deleteTwitterAppidTokensTokenid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppidWidgetsForm onSubmit={getTwitterAppidWidgets}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitterAppidWidgetsForm onSubmit={postTwitterAppidWidgets}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppidWidgetsWidgetidForm onSubmit={getTwitterAppidWidgetsWidgetid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PutTwitterAppidWidgetsWidgetidForm onSubmit={putTwitterAppidWidgetsWidgetid}/>
        </Col>
      </Col>

    </div>
    );
  }
}
