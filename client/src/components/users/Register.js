import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import showResults from './ShowResults';
import RegistrationForm from './forms/RegistrationForm';

import {Row, Col} from 'react-bootstrap';

export default class Register extends React.Component{
  render(){
    return(
 
    <div>
      <h2>Setup</h2>
      <Col md={6} mdOffset={0} sm={10} smOffset={1} xs={10} xsOffset={1}>
      <RegistrationForm onSubmit={showResults} />
      </Col>
    </div>
    );
  }
}
