import React from 'react';
import {Row, Col} from 'react-bootstrap';


import TwitchPost from './TwitchPost';

export default class TwitchCont extends React.Component{
  render(){
    return(
      <div className='twitch'>
         <div
            className='social__header'
          >
            Twitch
          </div>
        <Row>
          <Col md={3} sm={3} xs={3}>
            <div className='twitch_post'></div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className='twitch_post'></div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className='twitch_post'></div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className='twitch_post'></div>
          </Col>
        </Row>
      </div>
    );
  }
}