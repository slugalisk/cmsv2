import React from 'react';

import {Row, Col} from 'react-bootstrap';
import { Provider } from 'react-redux';

import getReddit from './components/getReddit.js';
import postReddit from './components/postReddit.js';
import getRedditAppid from './components/getRedditAppid.js';
import deleteRedditAppid from './components/deleteRedditAppid.js';

import GetRedditForm from './forms/GetRedditForm.js';
import PostRedditForm from './forms/PostRedditForm.js';
import GetRedditAppidForm from './forms/GetRedditAppidForm.js';
import DeleteRedditAppidForm from './forms/DeleteRedditAppidForm.js';

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

    </div>
    );
  }
}
