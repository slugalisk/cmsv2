import React from 'react';

import {Row, Col} from 'react-bootstrap';
import { Provider } from 'react-redux';

import getTwitter from './components/getTwitter';
import postTwitter from './components/postTwitter';
import getTwitterAppid from './components/getTwitterAppid';
import deleteTwitterAppid from './components/deleteTwitterAppid';

import GetTwitterForm from './forms/GetTwitterForm';
import PostTwitterForm from './forms/PostTwitterForm';
import GetTwitterAppidForm from './forms/GetTwitterAppidForm';
import DeleteTwitterAppidForm from './forms/DeleteTwitterAppidForm';



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

    </div>
    );
  }
}
