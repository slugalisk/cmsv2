import React from 'react';
import {Col, Row} from 'react-bootstrap';
import moment from 'moment';

export default class Tweetobject extends React.Component{

  render(){

    return(
      <Row>
        <Col 
          md={12} 
          mdOffset={0} 
          sm={12} 
          smOffset={0} 
          xs={12} 
          xsOffset={0} 
          className='twitter__tweet'
        >
        {this.props.children}
        </Col>
      </Row>
    )
  }
}