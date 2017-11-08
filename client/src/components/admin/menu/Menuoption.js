import React from 'react';

export default class Menuoption extends React.Component{
constructor(props){
  super(props);
  this.state=({
    color:"rgb(255,255,255)",
    width: "0px",
  })
  this.hover = this.hover.bind(this)
  this.leave = this.leave.bind(this)
}

hover(){
  
  this.setState({
    color:"rgb(124,211,211)",
    width:"100%"
  });
}

leave(){
  this.setState({
    color:"rgb(255,255,255)",
    width:"0px",
  });
}
  render(){
    /*option is full line, without this, the inline-blocks would stack*/
    const wrapper={
      width:"100%",
    }

    /*inline-block for 100% width underline to be the width of the option*/
    const option={
      textDecoration:"none",
      position:"relative",
      display:"inline-block",
      color:this.state.color,

      WebkitTransition: ".25s ease-out",
			MozTransition: ".25s ease-out",
			OTransition: ".25s ease-out",
      transition:".25s ease-out",
    }

    const under={
			height: "2px",
      width: this.state.width,
      backgroundColor:this.state.color,
			position: "absolute",
      bottom:"0px",
      left:"0",
			zIndex: "11",
			WebkitTransition: ".25s ease-out",
			MozTransition: ".25s ease-out",
			OTransition: ".25s ease-out",
      transition:".25s ease-out",
		}
    return(
      <div style={wrapper}>
      <div style={option} onMouseEnter={this.hover} onMouseLeave={this.leave}>
        {this.props.children}
        <span style={under}></span>
      </div>
      </div>
    );
  }
}