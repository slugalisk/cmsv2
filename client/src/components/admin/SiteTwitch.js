import React from 'react';

import {Col} from 'react-bootstrap';

import getTwitch from './components/getTwitch';

import GetTwitchForm from './forms/GetTwitchForm.js';



export default class SiteTwitch extends React.Component{
  render(){
    return(
 
    <div className='admin_form_wrapper'>
      <Col 
        md={4} 
        sm={6} 
        xs={12} 
        className='admin_column__1'
      >
      </Col>
      <Col 
        md={4} 
        mdOffset={4} 
        sm={6} 
        smOffset={6} 
        xs={12} 
        xsOffset={0}
        className='admin_column__2'>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetTwitchForm onSubmit={getTwitch}/>
        </Col>
      </Col>


      

    </div>
    );
  }
}
