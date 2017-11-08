import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import showResults from './components/showResults';
import SetupForm from './forms/SetupForm';

import {Row, Col} from 'react-bootstrap';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../../actions/setup';

class Setup extends React.Component{
constructor(props){
  super(props);
  this.state={
  }
}

  render(){
    return(
    <div>
      <Col md={6} mdOffset={0} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <SetupForm 
        onSubmit={showResults} 
        colorDisplay={this.props.colorDisplay}
        dispatch={this.props.dispatch}
        />
      </Col>
    </div>
    );
  }
}

function mapStateToProps(state, prop){
  /*the name of the reducer*/
  return{
    colorDisplay:state.setup.colorDisplay,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(MenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup);