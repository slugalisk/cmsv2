import React from 'react';

import {Link} from 'react-router-dom';

export default class Usernav extends React.Component{
  render(){
    return(
 
    <div className='user_nav'> 
      <div className='user_nav__background'>
        <Link to='/user/profile'>
          Account
        </Link>
        &nbsp; | &nbsp;
        <Link to='/user/messages'>
          Messages
        </Link>
        &nbsp; | &nbsp;
        <Link to='/user/authentication'>
          Authentication
        </Link>
        &nbsp; | &nbsp;
        <Link to='/user/subscriptions'>
          Subscriptions
        </Link>
        &nbsp; | &nbsp;
        <Link to='/user/donations'>
          Donations
        </Link>
        &nbsp; | &nbsp;
        <Link to='/user/gifts'>
          Gifts
        </Link>

      </div>
    </div>
    );
  }
}
