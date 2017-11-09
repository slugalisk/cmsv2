import React from 'react';
import {Link} from 'react-router-dom';

export default class Adminbarlink extends React.Component{

  render(){
    return(
      <Link 
        to={this.props.link} 
        className='admin_menu__bar__link'
      >
        {this.props.children}
      </Link>
    );
  }
}