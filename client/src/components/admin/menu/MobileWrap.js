import React from 'react';

import MobilePanel from './MobilePanel';
import MobileButton from './MobileButton';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../../../actions/adminmobile';

class MobileWrap extends React.Component{

  toggleMenu(){
      this.props.action.toggleMenu(!this.props.isHidden);
  }
  render(){

    return(
      <div className='admin_mobile'>
        <MobilePanel
        isHidden={this.props.isHidden}
        toggler={()=>this.toggleMenu()}
        />
        <MobileButton 
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
    isHidden:state.adminmobile.isHidden,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(MenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileWrap);