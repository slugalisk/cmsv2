import React from 'react';
import showResults from './components/showResults';

import {Col} from 'react-bootstrap';

import EmoteForm from './forms/EmoteForm';

export default class Emotes extends React.Component{
  render(){
    return(
 
    <div>
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


        <EmoteForm onSubmit={showResults}/>
      
    </div>
    );
  }
}
