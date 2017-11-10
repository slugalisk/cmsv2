import React from "react";
import classNames from 'classnames';

export default class MobileButton extends React.Component{
  render(){
    const menuLine1Names= classNames(
      'menu_line1',
      {
        'menu_line1--closed':this.props.isHidden,
      }
    );
    const menuLine2Names= classNames(
      'menu_line2',
      {
        'menu_line2--closed':this.props.isHidden,
      }
    );
    const menuLine3Names= classNames(
      'menu_line3',
      {
        'menu_line3--closed':this.props.isHidden,
      }
    );
	  return(
      <div
        onClick = {this.props.toggler}
        className = 'admin_mobile_btn'
      >
        <div 
          className = 'menu_btn__container'
        >
          <span 
            className = {menuLine1Names}
          >
          </span>
          <span 
            className = {menuLine2Names}
          >
          </span>
          <span 
            className = {menuLine3Names}
          >
          </span>
        </div>
			</div>

	  );
  }
}
