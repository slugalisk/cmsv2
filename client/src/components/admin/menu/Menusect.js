import React from "react";
import classNames from 'classnames';

import {Row, Col} from 'react-bootstrap';
export default class Keynotesect extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
      subtextHidden:true,
      maxheight:"0px",
    }
    this.toggledisplay = this.toggledisplay.bind(this);
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

	  return(
      <div>
        <Row>
          <div 
            className='admin_menu__title'
            onClick={this.toggledisplay} 
          > 
            <strong>
              {this.props.title}
            </strong> 
        </div>
        
        <div 
          className='admin_menu__subtext' 
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
