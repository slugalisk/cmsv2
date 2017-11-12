import React from 'react';

import {Row, Col} from 'react-bootstrap';

import Option from './components/Option';
import Toggler from './components/Toggler';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../../actions/togglers';

class SocialDisplay extends React.Component{
  render(){
    return(
 
      <div>
        <Col 
        md={12} 
        mdOffset={0} 
        sm={10} 
        smOffset={1} 
        xs={10} 
        xsOffset={1}
      >
      <Option>
        test
        <Toggler
          toggledOn={this.props.toggledOn}
        />
      </Option>
      
      </Col>
    </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(SocialDisplay);