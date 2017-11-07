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
    this.testfunction = this.testfunction.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }

  componentWillMount(){
    this.props.action.closeMenu("-300px");
  }
  testfunction(){
    this.props.action.closeMenu();
    console.log(this.props.offset);
  }
  openMenu(){
    this.props.action.openMenu();
    console.log(this.props.offset);
  }

  render(){

    


    return(
      <div>
        {/*mapItems*/}
        <button onClick={()=>this.testfunction()}>close</button>
        <button onClick={()=>this.openMenu()}>open</button>
        <Menupanel
        offset={this.props.offset}
        toggler={this.togglepanel}
        />
        <Menubtn 
        toggler={this.togglepanel}
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