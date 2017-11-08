import React from "react";
import classNames from 'classnames';

import {Row, Col} from 'react-bootstrap';
export default class Keynotesect extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
      titleHovered:false,
      subtextHidden:true,
      maxheight:"0px",
    }
    this.toggledisplay = this.toggledisplay.bind(this);
    this.hovered=this.hovered.bind(this);
    this.leave=this.leave.bind(this);
  }
  
  hovered(){
    this.setState({
      titleHovered:true,
    })
  }
  leave(){
    this.setState({
      titleHovered:false,
    })
  }

  componentDidMount(){
    this.toggledisplay();
  }

  toggledisplay(){
    if (this.state.subtextHidden){
      this.setState({
        maxheight:this.refs.expand.scrollHeight,
        subtextHidden:false,
      })
    }
    else{
      this.setState({
        maxheight:"0px",
        subtextHidden:true,
      })
    }
  }

  render(){
    const subtext={
      maxHeight: this.state.maxheight,
    }
    const adminMenuTitle = classNames(
      'admin_menu_title',
      {
        'admin_menu_title--hovered':this.state.titleHovered,
      }
    );

    const adminMenuSubtext = classNames(
      'admin_menu_subtext',
      {
      }
    );

	  return(
      <div>
        <Row>
          <div 
            className={adminMenuTitle}
            onClick={this.toggledisplay} 
            onMouseEnter={this.hovered} 
            onMouseLeave={this.leave}
          > 
            <strong>
              {this.props.title}
            </strong> 
        </div>
        
        <div 
          className={adminMenuSubtext} 
          style={subtext} 
          ref="expand"
        >
          {this.props.children}
        </div>
      </Row>
    </div>
	  );
  }
}
