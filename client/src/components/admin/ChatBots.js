import React from 'react';

import {Row, Col} from 'react-bootstrap';
import { Provider } from 'react-redux';
import showResults from './components/showResults';

import BotsForm from './forms/BotsForm';

export default class Bots extends React.Component{
  render(){
    return(
 
    <div>
      <Col 
        md={12} 
        mdOffset={0} 
        sm={10} 
        smOffset={1} 
        xs={10} 
        xsOffset={1}
      >
        <div className='admin_panel_title'>
          Bots
        </div>
        <BotsForm onSubmit={showResults}/>
      </Col>
    </div>
    );
  }
}
