import React from 'react';
import {Col} from 'react-bootstrap';
import StreamLive from './StreamLive';
import MainLogo from './MainLogo';

export default class MainHeader extends React.Component{

  render(){

    return(
      <div className='template1_header'>
        <Col md={3} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <MainLogo/>
        </Col>
        <Col md={3} mdOffset={4} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <StreamLive/>
        </Col>
        
      </div>
    );
  }
}