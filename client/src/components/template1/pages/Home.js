import React from 'react';
import {Row, Col} from 'react-bootstrap';

import MainHeader from '../components/MainHeader';
import Navbar from '../components/Navbar';

import TwitterCont from '../components/TwitterCont';
import RedditCont from '../components/RedditCont';
import YoutubeCont from '../components/YoutubeCont';
import TwitchCont from '../components/TwitchCont';

export default class Home extends React.Component{

  render(){
    return(
      <div>
        <Navbar/>
        <MainHeader/>
        <Row>
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
            <Col md={6}>
              <TwitterCont/>
            </Col>
            <Col md={6}>
              <RedditCont/>
            </Col>
          </Col>
        </Row>
        <Row>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
            <Col md={6}>
              <YoutubeCont/>
            </Col>
            <Col md={6}>
              <TwitchCont/>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
            <Col md={6}>
              <TwitterCont/>
            </Col>
            <Col md={6}>
              <RedditCont/>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}