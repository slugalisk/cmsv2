import React from 'react';

import {Row, Col} from 'react-bootstrap';
import TwitterForm from './forms/TwitterForm';

export default class SocialLinks extends React.Component{
  render(){
    return(
 
    <div>
      <Col md={12} mdOffset={0} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <Col md={5}>
        <TwitterForm/>
        </Col>
        <Col md={5} mdOffset={2}>
        <TwitterForm/>
        </Col>
      </Col>
    </div>
    );
  }
}
