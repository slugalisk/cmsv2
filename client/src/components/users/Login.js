import React from 'react';

import showResults from './ShowResults';
import LoginForm from './forms/LoginForm';

import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Login extends React.Component{
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
            Log In
          </h2>
          <LoginForm 
            onSubmit={showResults} 
          />
          Forgot Password?<br/>
          <Link to='/register'>
            Don't have an account? Sign up
          </Link>
        </div>
      </Col>
    </div>
    );
  }
}
