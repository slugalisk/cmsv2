import React from "react";

import {Row, Col} from 'react-bootstrap';
export default class Keynotesect extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
      maxheight:"0px",
      color:"rgb(255,255,255)",
    }
    this.toggledisplay = this.toggledisplay.bind(this);
    this.hovered=this.hovered.bind(this);
    this.leave=this.leave.bind(this);
  }
  
  hovered(){
    this.setState({
      color:"rgb(124,211,211)"
    })
  }
  leave(){
    this.setState({
      color:"rgb(255,255,255)"
    })
  }

  componentDidMount(){
    this.toggledisplay();
  }

  toggledisplay(){
    if (this.state.maxheight ==="0px"){
      this.setState({
        maxheight:this.refs.expand.scrollHeight,
      })
    }
    else{
      this.setState({
        maxheight:"0px",
      })
    }
  }

  render(){

    const title={
      fontSize:"2em",
      cursor:"pointer",
     position:"relative",
      color:this.state.color,
      backgroundColor:"#000",
      paddingLeft:"1em",
      lineHeight:"200%",

      WebkitTransition: ".25s ease-out",
			MozTransition: ".25s ease-out",
			OTransition: ".25s ease-out",
      transition:".25s ease-out",
    }

    const sub={
      maxHeight: this.state.maxheight,
      overflow:"hidden",
			WebkitTransition: ".5s ease-in",
			MozTransition: ".5s ease-in",
			OTransition: ".5s ease-in",
      transition:".5s ease-in",

        fontFamily:"Roboto, Helvetica",
        fontSize:"16px",
        letterSpacing:".5px",
        lineHeight:"150%",

        color:this.props.colormenutext,
        paddingLeft:"2em",

    }


	  return(

      <div>
        <Row>
        <div style={title} onClick={this.toggledisplay} onMouseEnter={this.hovered} onMouseLeave={this.leave}> 
        <strong>{this.props.title}</strong> 
      </div>
       
        

      <div style={sub} ref="expand">
       {this.props.children}
        </div>
      </Row>


      </div>
	  );
  }
}
