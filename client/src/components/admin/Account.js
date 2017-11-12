import React from 'react';

import showResults from './components/showResults';
import AccountForm from './forms/AccountForm';

import {Col} from 'react-bootstrap';

export default class Acccount extends React.Component{
  render(){
    return(
 
    <div>
      <h2>Account</h2>
      <Col 
        md={12} 
        mdOffset={0} 
        sm={10} 
        smOffset={1} 
        xs={10} 
        xsOffset={1}
      >
      <AccountForm onSubmit={showResults} />
      </Col>
    </div>
    );
  }
}
