import React from 'react';

import {Col} from 'react-bootstrap';


import getGoogle from './components/getGoogle';
import postGoogle from './components/postGoogle';
import getGoogleAppid from './components/getGoogleAppid';
import deleteGoogleAppid from './components/deleteGoogleAppid';
import postGoogleAppidOauth from './components/postGoogleAppidOauth';
import getGoogleAppidTokens from './components/getGoogleAppidTokens';
import postGoogleAppidTokens from './components/postGoogleAppidTokens';
import getGoogleAppidTokensTokenid from './components/getGoogleAppidTokensTokenid';
import deleteGoogleAppidTokensTokenid from './components/deleteGoogleAppidTokensTokenid';


import GetGoogleForm from './forms/GetGoogleForm';
import PostGoogleForm from './forms/PostGoogleForm';
import GetGoogleAppidForm from './forms/GetGoogleAppidForm';
import DeleteGoogleAppidForm from './forms/DeleteGoogleAppidForm';
import PostGoogleAppidOauthForm from './forms/PostGoogleAppidOauthForm';
import GetGoogleAppidTokensForm from './forms/GetGoogleAppidTokensForm';
import PostGoogleAppidTokensForm from './forms/PostGoogleAppidTokensForm';
import GetGoogleAppidTokensTokenidForm from './forms/GetGoogleAppidTokensTokenidForm';
import DeleteGoogleAppidTokensTokenidForm from './forms/DeleteGoogleAppidTokensTokenidForm';

export default class SiteGoogle extends React.Component{
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
          <GetGoogleForm onSubmit={getGoogle}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostGoogleForm onSubmit={postGoogle}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetGoogleAppidForm onSubmit={getGoogleAppid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteGoogleAppidForm onSubmit={deleteGoogleAppid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostGoogleAppidOauthForm onSubmit={postGoogleAppidOauth}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetGoogleAppidTokensForm onSubmit={getGoogleAppidTokens}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostGoogleAppidTokensForm onSubmit={postGoogleAppidTokens}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetGoogleAppidTokensTokenidForm onSubmit={getGoogleAppidTokensTokenid}/>
        </Col>
      </Col>
      
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteGoogleAppidTokensTokenidForm onSubmit={deleteGoogleAppidTokensTokenid}/>
        </Col>
      </Col>


    </div>
    );
  }
}
