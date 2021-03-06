import React from 'react';
import showResults from './components/showResults';

import {Col, Row} from 'react-bootstrap';

import EmoteForm from './forms/EmoteForm';

export default class Emotes extends React.Component{
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

      <Row>
        <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
            <div className='admin_panel_title'>
              Emotes
            </div>
          </Col>
        </Col>
      </Row>

        <EmoteForm onSubmit={showResults}/>
      
    </div>
    );
  }
}
