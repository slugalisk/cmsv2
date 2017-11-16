import React from 'react';

import {Row, Col} from 'react-bootstrap';
import { Provider } from 'react-redux';
import showResults from './components/showResults';

import ChatForm from './forms/ChatForm';

export default class Chat extends React.Component{
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
            Chat
        </div>
        <ChatForm onSubmit={showResults}/>
      </Col>
    </div>
    );
  }
}
