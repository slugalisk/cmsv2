import React from 'react';
import {Link} from 'react-router-dom';

import classNames from 'classnames';

export default class NavbarMobile extends React.Component{
  render(){

    const mobileNav = classNames(
      'mobile_nav',
      {
        'mobile_nav--hidden':this.props.isHidden
      }
    );
  
  
    return(
      <div 
        className = {mobileNav}
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
          to = '/admin'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin
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
          to = '/admin'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin
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
          to = '/admin'
          className = 'menu_panel__link' 
          onClick = {this.props.toggler}
        >
          Admin
        </Link>




        <br/>
       
      </div>
    )
  }
}