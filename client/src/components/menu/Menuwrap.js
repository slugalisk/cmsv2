import React from 'react';

import Menupanel from './Menupanel';
import Menubtn from './Menubtn';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../../actions/menu';
class Menuwrap extends React.Component{
  toggleMenu(){
      this.props.action.toggleMenu(!this.props.isHidden);
  }
  render(){

    return(
      <div>
        <Menupanel
          isHidden={this.props.isHidden}
          toggler={()=>this.toggleMenu()}
        />
        <Menubtn 
          isHidden={this.props.isHidden}
          toggler={()=>this.toggleMenu()}
        />
      </div>
    )
  }
}

function mapStateToProps(state, prop){
  /*the name of the reducer*/
  return{
    isHidden:state.menu.isHidden,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(MenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menuwrap);