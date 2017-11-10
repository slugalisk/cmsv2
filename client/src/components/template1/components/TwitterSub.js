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
        <a href={this.props.link}>Link</a> {this.props.children}
        <br/>
        <span 
          className='twitter_timestamp'
        >
        {moment(this.props.timestamp, 'YYYY-MM-DD-HH:mm:ss.SSS Z').fromNow()}
        </span>
        </Col>
      </Row>
    )
  }
}
/*2017-11-09T22:27:43.651*/