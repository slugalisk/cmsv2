import React from 'react';
import TwitterCont from '../components/TwitterCont';
import {Row, Col} from 'react-bootstrap';

import MainHeader from '../components/MainHeader';
import Navbar from '../components/Navbar';

export default class Home extends React.Component{

  render(){
    return(
      <div>
        <Navbar/>
        <MainHeader/>
        <Row>
          <Col md={10} mdOffset={1}>
            <Col md={6}>
              <TwitterCont/>
            </Col>
            <Col md={6}>
              <TwitterCont/>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}