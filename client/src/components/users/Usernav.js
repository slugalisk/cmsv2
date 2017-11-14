import React from 'react';

import {Link} from 'react-router-dom';

export default class Register extends React.Component{
  render(){
    return(
 
    <div>
      <Link to='/user/profile'>
        Account
      </Link>
      <Link to='/user/messages'>
        Messages
      </Link>
      <Link to='/user/authentication'>
        Authentication
      </Link>
    </div>
    );
  }
}
