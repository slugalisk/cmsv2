import React from 'react';
import YoutubeSub from './YoutubeSub';
import {Row, Col} from 'react-bootstrap';

export default class YoutubeCont extends React.Component{
  render(){
    return(
      <div>
         <div
            className='social__header'
          >
            Youtube
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