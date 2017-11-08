import React from 'react';
import classNames from 'classnames';

export default class Menuoption extends React.Component{
constructor(props){
  super(props);
  this.state=({
    hovered:false,
  })
  this.hover = this.hover.bind(this)
  this.leave = this.leave.bind(this)
}

hover(){
  this.setState({
    hovered:true,
  });
}

leave(){
  this.setState({
    hovered:false,
  });
}
  render(){

    const adminMenuOptionContainer = classNames(
      'admin_menu_option__container',
      {
        'admin_menu_option__container--hovered':this.state.hovered,
      }
    );
  
    const adminMenuOptionUnderline = classNames(
      'admin_menu_option__underline',
      {
        'admin_menu_option__underline--hovered':this.state.hovered,
      }
    );
    return(
      <div className='admin_menu_option'>
        <div 
          className={adminMenuOptionContainer} 
          onMouseEnter={this.hover} 
          onMouseLeave={this.leave}
        >
          {this.props.children}
          <span className={adminMenuOptionUnderline}></span>
        </div>
      </div>
    );
  }
}