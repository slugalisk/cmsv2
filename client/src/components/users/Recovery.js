import React from 'react';

import postAuthRecovery from './components/postAuthRecovery';

import RecoveryForm from './forms/RecoveryForm';

import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Recovery extends React.Component{
  render(){
    return(
 
    <div>
      <Col 
        md={4} 
        mdOffset={4} 
        sm={6} 
        smOffset={3} 
        xs={10} 
        xsOffset={1}
      >
        <div className='login_wrapper'>
          <h2 
            className='form_title'
          >
            Recover Password
          </h2>
          <RecoveryForm 
            onSubmit={postAuthRecovery} 
          />
          
        </div>
      </Col>
    </div>
    );
  }
}
