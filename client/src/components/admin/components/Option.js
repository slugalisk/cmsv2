import React from 'react';
import {Col} from 'react-bootstrap';

export default class Chatoption extends React.Component{

  render(){
    return(
      <Col md={4} sm={4} xs={6} className='admin_option'>
        <div className='admin_option__inner'>
          {this.props.children}
        </div>
      </Col>
    )
  }
}