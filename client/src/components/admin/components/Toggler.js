import React from 'react';
import classNames from 'classnames';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../../../actions/togglers';

class Toggler extends React.Component{

  colorPickerClick(togglerName){
    this.props.action.toggleColorPicker(togglerName, !this.props.toggledOn[togglerName]);
    console.log(this.props.toggledOn[togglerName]);
  }

  render(){

    const adminTogglerInner = classNames(
      'admin_toggler__inner',
      {
        'admin_toggler__inner--active':this.props.toggledOn[this.props.togglerName]
      }
    )

  
    return(
      <div 
        className='admin_toggler'
      >
        <div 
          className={'admin_toggler__button'}
          onClick = {() => this.colorPickerClick(this.props.togglerName)}
        >
          <div 
            className={adminTogglerInner}
          >
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, prop){
  /*the name of the reducer*/
  return{
    toggledOn:state.togglers.toggledOn,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(MenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggler);