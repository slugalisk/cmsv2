import React from 'react';

import {Col} from 'react-bootstrap';


import getTwitch from './components/getTwitch';
import postTwitch from './components/postTwitch';
import getTwitchAppid from './components/getTwitchAppid';
import deleteTwitchAppid from './components/deleteTwitchAppid';
import postTwitchAppidOauth from './components/postTwitchAppidOauth';
import getTwitchAppidTokens from './components/getTwitchAppidTokens';
import postTwitchAppidTokens from './components/postTwitchAppidTokens';
import getTwitchAppidTokensTokenid from './components/getTwitchAppidTokensTokenid';
import deleteTwitchAppidTokensTokenid from './components/deleteTwitchAppidTokensTokenid';


import GetTwitchForm from './forms/GetTwitchForm';
import PostTwitchForm from './forms/PostTwitchForm';
import GetTwitchAppidForm from './forms/GetTwitchAppidForm';
import DeleteTwitchAppidForm from './forms/DeleteTwitchAppidForm';
import PostTwitchAppidOauthForm from './forms/PostTwitchAppidOauthForm';
import GetTwitchAppidTokensForm from './forms/GetTwitchAppidTokensForm';
import PostTwitchAppidTokensForm from './forms/PostTwitchAppidTokensForm';
import GetTwitchAppidTokensTokenidForm from './forms/GetTwitchAppidTokensTokenidForm';
import DeleteTwitchAppidTokensTokenidForm from './forms/DeleteTwitchAppidTokensTokenidForm';

export default class SiteTwitch extends React.Component{
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
          <GetTwitchForm onSubmit={getTwitch}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitchForm onSubmit={postTwitch}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitchAppidForm onSubmit={getTwitchAppid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteTwitchAppidForm onSubmit={deleteTwitchAppid}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitchAppidOauthForm onSubmit={postTwitchAppidOauth}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitchAppidTokensForm onSubmit={getTwitchAppidTokens}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostTwitchAppidTokensForm onSubmit={postTwitchAppidTokens}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitchAppidTokensTokenidForm onSubmit={getTwitchAppidTokensTokenid}/>
        </Col>
      </Col>
      
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteTwitchAppidTokensTokenidForm onSubmit={deleteTwitchAppidTokensTokenid}/>
        </Col>
      </Col>


    </div>
    );
  }
}
