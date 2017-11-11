import React from 'react';
import {Row, Col} from 'react-bootstrap';

import moment from 'moment';
export default class RedditSub extends React.Component{
  render(){
    return(
      <div>
        <Row>
        <Col 
          md={12} 
          mdOffset={0} 
          sm={12} 
          smOffset={0} 
          xs={12} 
          xsOffset={0} 
          className='reddit_post'
        >
        <a href={this.props.link}>Link</a> {this.props.children}
        <br/>
        <span 
          className='reddit_timestamp'
        >
        {moment(this.props.timestamp, 'YYYY-MM-DD-HH:mm:ss.SSS Z').fromNow()}
        </span>
        </Col>
      </Row>
      </div>
    );
  }
}