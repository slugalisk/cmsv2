import React from 'react';
import {Link} from 'react-router-dom';

import MenubarLink from './MenubarLink';

export default class Menubar extends React.Component{

  render(){

    return(
      <div className='admin_menu__bar'>
        <Link 
          to='/' 
          className='admin_menu__bar__link'
        >
          {this.props.location.pathname}
        </Link>
      </div>
    );
  }
}