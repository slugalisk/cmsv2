import React from 'react';

import showResults from './ShowResults';
import LoginForm from './forms/LoginForm';

import {Col} from 'react-bootstrap';

export default class Login extends React.Component{
  render(){
    return(
 
    <div>
      <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={10} xsOffset={1}>
      <h2>Log In</h2>
      <LoginForm onSubmit={showResults} />
      </Col>
    </div>
    );
  }
}
