import React from 'react';

import {Row, Col} from 'react-bootstrap';
import { Provider } from 'react-redux';

import apiRequest from './components/apiRequest';

import GetTwitterForm from './forms/GetTwitterForm';
import PostTwitterForm from './forms/PostTwitterForm';
import GetTwitterAppIdForm from './forms/GetTwitterAppIdForm';
import DeleteTwitterAppIdForm from './forms/DeleteTwitterAppIdForm';
import PostTwitterAppIdOauthForm from './forms/PostTwitterAppIdOauthForm';
import GetTwitterAppIdTokensForm from './forms/GetTwitterAppIdTokensForm';
import PostTwitterAppIdTokensForm from './forms/PostTwitterAppIdTokensForm';
import GetTwitterAppIdTokensTokenIdForm from './forms/GetTwitterAppIdTokensTokenIdForm';
import PutTwitterAppIdTokensTokenIdForm from './forms/PutTwitterAppIdTokensTokenIdForm';
import DeleteTwitterAppIdTokensTokenIdForm from './forms/DeleteTwitterAppIdTokensTokenIdForm';
import GetTwitterAppIdWidgetsForm from './forms/GetTwitterAppIdWidgetsForm';
import PostTwitterAppIdWidgetsForm from './forms/PostTwitterAppIdWidgetsForm';
import GetTwitterAppIdWidgetsWidgetIdForm from './forms/GetTwitterAppIdWidgetsWidgetIdForm';
import PutTwitterAppIdWidgetsWidgetIdForm from './forms/PutTwitterAppIdWidgetsWidgetIdForm';
import DeleteTwitterAppIdWidgetsWidgetIdForm from './forms/DeleteTwitterAppIdWidgetsWidgetIdForm';
import GetTwitterAppIdWidgetsWidgetIdFeedForm from './forms/GetTwitterAppIdWidgetsWidgetIdFeedForm';

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
          <GetTwitterForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitterForm onSubmit={apiRequest}/>
        </Col>
      </Col>
      
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppIdForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteTwitterAppIdForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitterAppIdOauthForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppIdTokensForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitterAppIdTokensForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppIdTokensTokenIdForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PutTwitterAppIdTokensTokenIdForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteTwitterAppIdTokensTokenIdForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppIdWidgetsForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitterAppIdWidgetsForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppIdWidgetsWidgetIdForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PutTwitterAppIdWidgetsWidgetIdForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteTwitterAppIdWidgetsWidgetIdForm onSubmit={apiRequest}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitterAppIdWidgetsWidgetIdFeedForm onSubmit={apiRequest}/>
        </Col>
      </Col>

    </div>
    );
  }
}
