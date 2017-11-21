import React from 'react';

import showResults from './ShowResults';
import RegistrationForm from './forms/RegistrationForm';

import {Col} from 'react-bootstrap';

export default class Register extends React.Component{
  render(){
    return(
 
    <div>
      <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={10} xsOffset={1}>
      <h2>Register</h2>
      <RegistrationForm onSubmit={showResults} />
      </Col>
    </div>
    );
  }
}
