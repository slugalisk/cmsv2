import React from "react";
import classNames from 'classnames';

export default class NavbtnMobile extends React.Component{
  render(){
    const templateNavLine1= classNames(
      'template_nav_line_1',
      {
        'template_nav_line_1--closed':this.props.isHidden,
      }
    );
    const templateNavLine2= classNames(
      'template_nav_line_2',
      {
        'template_nav_line_2--closed':this.props.isHidden,
      }
    );
    const templateNavLine3= classNames(
      'template_nav_line_3',
      {
        'template_nav_line_3--closed':this.props.isHidden,
      }
    );
	  return(
      <div
        onClick = {this.props.toggler}
        className = 'template_nav_btn'
      >
        <div 
          className = 'template_nav_btn__container'
        >
          <span 
            className = {templateNavLine1}
          >
          </span>
          <span 
            className = {templateNavLine2}
          >
          </span>
          <span 
            className = {templateNavLine3}
          >
          </span>
        </div>
			</div>

	  );
  }
}
