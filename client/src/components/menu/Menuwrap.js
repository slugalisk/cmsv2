import React from 'react';

import Menupanel from './Menupanel';
import Menubtn from './Menubtn';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../../actions/menu';

class Menuwrap extends React.Component{
  constructor(props){
    super(props);
    this.state={
      offset: '-300px',
      lineTransform1: 'none',
      lineTransform2: 'none',
      lineWidth3: '14px',

      lineTop1: '29px',
      lineTop2: '38px',

      lineLeft3:'18px',
      buttonColor: '#fff',
      rotate:'rotate(0deg)',

      opened:false,
    }
    this.hoverbutton = this.hoverbutton.bind(this);
    this.leavebutton = this.leavebutton.bind(this);
    
  }

  hoverbutton(){
		this.setState({
		 buttoncolor: '#aaa',
	 });
	 if (this.state.offset === '0px'){
     if(this.state.rotate==='rotate(360deg)'){
      this.setState({
        rotate:'rotate(0deg)',
      })
     }
     else{
		this.setState({
			rotate:'rotate(360deg)',
    })
  }
   }
   else{
     this.setState({
       l3left:'28px',
     })
   }
}

leavebutton(){
	this.setState({
		 buttoncolor: '#fff',
  });
  if (this.state.offset==='-300px'){
    this.setState({
    l3left:'18px',
    });
  }
}



  toggleMenu(){
    if (this.state.opened){
      this.props.action.toggleMenu(false);
      this.setState({
        opened:false,

        lineTransform1: 'none',
        lineTransform2: 'none',
        lineWidth3: '14px',
        lineTop1: '29px',
        lineTop2: '38px',
      });
    }
    else{
      this.props.action.toggleMenu(true);
      this.setState({
        opened:true,

        lineTransform1: 'rotate(45deg)',
        lineTransform2: 'rotate(-45deg)',
        lineWidth3: '0px',
        lineTop1: '34px',
        lineTop2: '34px',
      });
    }
  }

  render(){

    return(
      <div>

        <Menupanel
        offset={this.props.offset}
        toggler={()=>this.toggleMenu()}
        />
        <Menubtn 
        toggler={()=>this.toggleMenu()}
        line1rot={this.state.lineTransform1}
				line2rot={this.state.lineTransform2}
				line3rot={this.state.lineWidth3}
				line1top={this.state.lineTop1}
        line2top={this.state.lineTop2}

        hoverbutton={this.hoverbutton}
        leavebutton={this.leavebutton}
        buttoncolor={this.state.buttonColor}
        rotate={this.state.rotate}

        lineLeft3={this.state.l3left}
        />
      </div>
    )
  }
}

function mapStateToProps(state, prop){
  /*the name of the reducer*/
  return{
    offset:state.menu.offset,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(MenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menuwrap);