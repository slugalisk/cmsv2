import React from 'react';


import postAuthCredentials from './components/postAuthCredentials';
import deletePeople from './components/deletePeople';
import deleteAuthCredentials from './components/deleteAuthCredentials';

import showResults from './ShowResults';

import RegistrationForm from './forms/RegistrationForm';
import DeletePeopleForm from './forms/DeletePeopleForm';
import DeleteAuthCredentialsForm from './forms/DeleteAuthCredentialsForm';


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
            className='form_title'
          >
            Register
          </h2>
          <RegistrationForm 
            onSubmit={postAuthCredentials} 
          />
          <Link to='/recovery'>
            Forgot Password?<br/>
          </Link>
          <Link to='/login'>
            Already have an account? Log In
          </Link>
        </div>

        <DeletePeopleForm 
            onSubmit={deletePeople} 
          />

        <DeleteAuthCredentialsForm 
          onSubmit={deleteAuthCredentials} 
        />

      </Col>
    </div>
    );
  }
}
