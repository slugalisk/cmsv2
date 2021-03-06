import React from 'react';
import { ChromePicker } from 'react-color';
import dropper from '../../../images/dropper.svg';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../../../actions/setup';
import { change } from 'redux-form'


class ColorPicker extends React.Component{
  colorPickerClick(colorPickerName){
    this.props.action.toggleColorPicker(colorPickerName, !this.props.colorDisplay[colorPickerName]);
  }
  changeColor = (color) => {
    this.props.action.chooseColor(this.props.colorPickerName, color.hex);
    this.props.dispatch(change(this.props.formName, this.props.fieldName, this.props.colorChoice[this.props.colorPickerName]));
  };

  render(){
    
    return(
      <div className='admin_color_picker'>
        <img 
          src={dropper} 
          className= 'admin_setup__dropper' 
          alt="Eye Dropper By Gregor Cresnar"
          onClick={() => this.colorPickerClick(this.props.colorPickerName)}
        />
        { this.props.colorDisplay[this.props.colorPickerName] ? 
          <div className = 'admin_setup__popover'>
            <div className = 'admin_setup__cover'
            onClick = {() => this.colorPickerClick(this.props.colorPickerName)}
            />
            <ChromePicker
            color={this.props.colorChoice[this.props.colorPickerName]}
            onChangeComplete={ this.changeColor }
          />
        </div> 
        : 
        null 
        }
      </div>
    )
  }
}

function mapStateToProps(state, prop){
  /*the name of the reducer*/
  return{
    colorDisplay:state.setup.colorDisplay,
    colorChoice:state.setup.colorChoice,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(MenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);