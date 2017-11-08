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
          to = '/admin/setup2'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin Setup2
        </Link>
      </div>
    )
  }
}