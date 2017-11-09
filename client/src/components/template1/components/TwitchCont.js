import React from 'react';
import {Row, Col} from 'react-bootstrap';


import TwitchSub from './TwitchSub';

export default class TwitchCont extends React.Component{
  render(){
    return(
      <div>
         <div
            className='social__header'
          >
            Twitch
          </div>
        <Row>
          <Col md={3} sm={3} xs={3}>
            <div className='youtube_thumbnail'></div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className='youtube_thumbnail'></div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className='youtube_thumbnail'></div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className='youtube_thumbnail'></div>
          </Col>
        </Row>
      </div>
    );
  }
}