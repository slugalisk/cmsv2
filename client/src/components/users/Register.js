import React from 'react';

import showResults from './ShowResults';
import RegistrationForm from './forms/RegistrationForm';

import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Register extends React.Component{
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
            className='title_row'
          >
            Register
          </h2>
          <RegistrationForm 
            onSubmit={showResults} 
          />
          <Link to='/login'>
            Already have an account? Log In
          </Link>
        </div>
      </Col>
    </div>
    );
  }
}
