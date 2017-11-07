import React from 'react';
import {Col, Row} from 'react-bootstrap';
import moment from 'moment';

export default class Tweetobject extends React.Component{
constructor(props){
  super(props);
  this.state={
  }
}


  render(){
    const tweet={
    }

    return(
      <Row>
        <Col 
          md={12} 
          mdOffset={0} 
          sm={12} 
          smOffset={0} 
          xs={12} 
          xsOffset={0} 
          style={tweet} 
          className='tweet'
        >
        {this.props.children}
        </Col>
      </Row>
    )
  }
}