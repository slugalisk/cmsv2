import React from "react";
import classNames from 'classnames';

export default class MobileButton extends React.Component{
  render(){
    const menuLine1Names= classNames(
      'admin_mobile_line1',
      {
        'admin_mobile_line1--closed':this.props.isHidden,
      }
    );
    const menuLine2Names= classNames(
      'admin_mobile_line2',
      {
        'admin_mobile_line2--closed':this.props.isHidden,
      }
    );
    const menuLine3Names= classNames(
      'admin_mobile_line3',
      {
        'admin_mobile_line3--closed':this.props.isHidden,
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
