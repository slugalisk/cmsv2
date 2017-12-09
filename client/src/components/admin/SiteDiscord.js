import React from 'react';

import {Col} from 'react-bootstrap';


import getDiscord from './components/getDiscord';
import postDiscord from './components/postDiscord';
import getDiscordAppid from './components/getDiscordAppid';
import deleteDiscordAppid from './components/deleteDiscordAppid';
import postDiscordAppidOauth from './components/postDiscordAppidOauth';
import getDiscordAppidTokens from './components/getDiscordAppidTokens';
import postDiscordAppidTokens from './components/postDiscordAppidTokens';
import getDiscordAppidTokensTokenid from './components/getDiscordAppidTokensTokenid';
import deleteDiscordAppidTokensTokenid from './components/deleteDiscordAppidTokensTokenid';


import GetDiscordForm from './forms/GetDiscordForm';
import PostDiscordForm from './forms/PostDiscordForm';
import GetDiscordAppidForm from './forms/GetDiscordAppidForm';
import DeleteDiscordAppidForm from './forms/DeleteDiscordAppidForm';
import PostDiscordAppidOauthForm from './forms/PostDiscordAppidOauthForm';
import GetDiscordAppidTokensForm from './forms/GetDiscordAppidTokensForm';
import PostDiscordAppidTokensForm from './forms/PostDiscordAppidTokensForm';
import GetDiscordAppidTokensTokenidForm from './forms/GetDiscordAppidTokensTokenidForm';
import DeleteDiscordAppidTokensTokenidForm from './forms/DeleteDiscordAppidTokensTokenidForm';

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
          <GetDiscordForm onSubmit={getDiscord}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostDiscordForm onSubmit={postDiscord}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetDiscordAppidForm onSubmit={getDiscordAppid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteDiscordAppidForm onSubmit={deleteDiscordAppid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostDiscordAppidOauthForm onSubmit={postDiscordAppidOauth}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetDiscordAppidTokensForm onSubmit={getDiscordAppidTokens}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostDiscordAppidTokensForm onSubmit={postDiscordAppidTokens}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetDiscordAppidTokensTokenidForm onSubmit={getDiscordAppidTokensTokenid}/>
        </Col>
      </Col>
      
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteDiscordAppidTokensTokenidForm onSubmit={deleteDiscordAppidTokensTokenid}/>
        </Col>
      </Col>


    </div>
    );
  }
}
