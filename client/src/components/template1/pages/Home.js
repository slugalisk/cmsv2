import React from 'react';
import TwitterCont from '../../TwitterCont';
import {Row, Col} from 'react-bootstrap';

export default class Home extends React.Component{
constructor(props){
  super(props);
  this.state={
  }
}

  render(){
    return(
      <div>
        <Col md={10} mdOffset={1}>
          <Col md={6}>
            <TwitterCont/>
          </Col>
        </Col>
      </div>
    )
  }
}