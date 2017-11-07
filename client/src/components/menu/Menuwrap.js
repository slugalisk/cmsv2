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
      lineanim1: 'none',
      lineanim2: 'none',
      lineanim3: '14px',
      line1fromtop: '29px',
      line2fromtop: '38px',

      l3left:'18px',
      buttoncolor: '#fff',
      rotate:'rotate(0deg)',

      opened:false,

    }
    this.togglepanel = this.togglepanel.bind(this);
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

  togglepanel(){
    if(this.state.offset ==='-300px'){
      this.setState({
        lineanim1: 'rotate(45deg)',
        lineanim2: 'rotate(-45deg)',
        lineanim3: '0px',
        line1fromtop: '34px',
        line2fromtop: '34px',
        offset:'0px',
      })
    }
    else{
      this.setState({
        lineanim1: 'none',
        lineanim2: 'none',
        lineanim3: '14px',
        line1fromtop: '29px',
        line2fromtop: '38px',
        offset:'-300px',
      })
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillMount(){
    this.props.action.toggleMenu("-300px");
  }

  toggleMenu(){
    if (this.state.opened){
      this.props.action.toggleMenu("-300px");
      this.setState({
        opened:false,
      });
    }
    else{
      this.props.action.toggleMenu("0px");
      this.setState({
        opened:true,
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
        line1rot={this.state.lineanim1}
				line2rot={this.state.lineanim2}
				line3rot={this.state.lineanim3}
				line1top={this.state.line1fromtop}
        line2top={this.state.line2fromtop}

        hoverbutton={this.hoverbutton}
        leavebutton={this.leavebutton}
        buttoncolor={this.state.buttoncolor}
        rotate={this.state.rotate}

        l3left={this.state.l3left}
        />
      </div>
    )
  }
}

function mapStateToProps(state, prop){
  /*the name of the reducer*/
  return{
    offset:state.menu,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(MenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menuwrap);