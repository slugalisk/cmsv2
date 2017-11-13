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
          className = 'template_nav_link' 
          onClick = {this.props.toggler}
        >
          Home
        </Link>
        <br/>
        <Link
          to = '/admin'
          className = 'template_nav_link' 
          onClick = {this.props.toggler}
        >
          Blog
        </Link>
        <br/>
        <Link
          to = '/admin'
          className = 'template_nav_link' 
          onClick = {this.props.toggler}
        >
          Twitter
        </Link>
        <br/>
        <Link
          to = '/admin'
          className = 'template_nav_link' 
          onClick = {this.props.toggler}
        >
          Youtube
        </Link>
        <br/>
        <Link
          to = '/admin'
          className = 'template_nav_link' 
          onClick = {this.props.toggler}
        >
          Reddit
        </Link>
        <br/>
        <Link
          to = '/admin'
          className = 'template_nav_link' 
          onClick = {this.props.toggler}
        >
          Facebook
        </Link>
        <br/>
        <Link
          to = '/admin'
          className = 'template_nav_link' 
          onClick = {this.props.toggler}
        >
          Donate
        </Link>
        <br/>
        <Link
          to = '/admin'
          className = 'template_nav_link' 
          onClick = {this.props.toggler}
        >
          Subscribe
        </Link>



        <br/>
       
      </div>
    )
  }
}