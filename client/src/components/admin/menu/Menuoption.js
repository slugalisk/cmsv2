import React from 'react';

export default class Menuoption extends React.Component{
  render(){
    return(
      <div className='admin_menu_option'>
        <div 
          className="admin_menu_option__container"
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}