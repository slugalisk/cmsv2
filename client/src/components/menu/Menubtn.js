import React from "react";

export default class Menubtn extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
		}
	}

  render(){
		const menuButtonWrapper = {
      transform: this.props.rotate,
		}
		const menuButton={

		}
		const menuLine1={
      backgroundColor: this.props.buttoncolor,
			top:this.props.line1top,
			WebkitTransform: this.props.line1rot,
			MozTransform: this.props.line1rot,
			OTransform: this.props.line1rot,
			transform: this.props.line1rot,
		}
		const menuLine2={
      backgroundColor: this.props.buttoncolor,
			top:this.props.line2top,
			WebkitTransform: this.props.line2rot,
			MozTransform: this.props.line2rot,
			OTransform: this.props.line2rot,
			transform: this.props.line2rot,
		}
		const menuLine3={
			width: this.props.line3rot,
			backgroundColor: this.props.buttoncolor,
			left: this.props.l3left,
			top: '47px',
		}

	  return(
      <div 
        style = {menuButtonWrapper}
        onClick = {this.props.toggler}
        onMouseEnter = {this.props.hoverbutton} 
        onMouseLeave = {this.props.leavebutton}
        className = 'menu_btn'
      >
        <div 
          style = {menuButton}
          className = 'menu_btn__container'
        >
          <span 
            style = {menuLine1} 
            className = 'menu_btn__line'
          >
          </span>
          <span 
            style = {menuLine2}
            className = 'menu_btn__line'
          >
          </span>
          <span 
            style = {menuLine3} 
            className = 'menu_btn__line'>
          </span>
        </div>
			</div>

	  );
  }
}
