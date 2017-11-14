import React from 'react';
import {Link} from 'react-router-dom';

import classNames from 'classnames';

export default class Menupanel extends React.Component{
  render(){

    const menuClassName = classNames(
      'menu_panel',
      {
        'menu_panel--hidden':this.props.isHidden
      }
    );
  
    return(
      <div 
        className = {menuClassName}
      >
        <Link 
          to='/'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Home
        </Link>
        <br/>
        <Link
          to = '/admin'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin
        </Link>
        <br/>
        <Link
          to = '/admin/account'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin Account
        </Link>
        <br/>
        <Link
          to = '/admin/setup'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin Setup
        </Link>
        <br/>
        <Link
          to = '/admin/users'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin Users
        </Link>
        <br/>
        <Link
          to = '/admin/banlist'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin Banlist
        </Link>
        <br/>
        <Link
          to = '/admin/email'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin Email
        </Link>
        <br/>
        <Link
          to = '/admin/groups'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin Groups
        </Link>
        <br/>
        <Link
          to = '/admin/subscriptions'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin Subscriptions
        </Link>
        <br/>
        <Link
          to = '/admin/bots'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin Bots
        </Link>
        <br/>
        <Link
          to = '/admin/emotes'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin Emotes
        </Link>
        <br/>
        <Link
          to = '/admin/polls'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin Polls
        </Link>
        <br/>
        <Link
          to = '/admin/chatoptions'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin Chat Options
        </Link>
        <br/>
        <Link
          to = '/login'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Login
        </Link>
        <br/>
        <Link
          to = '/register'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Register
        </Link>
        <br/>
        <Link
          to = '/user/profile'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          User Profile
        </Link>
        <br/>
        <Link
          to = '/user/messages'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          User Messages
        </Link>
        <br/>
        <Link
          to = '/user/authentication'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          User Authentication
        </Link>




        <br/>
       
      </div>
    )
  }
}