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
    pageBackgroundColorDisplay:false,
    pageHeaderColor1Display:false,
    pageHeaderColor2Display:false,
  }
}
  togglePageBackgroundColor(){
    this.props.action.togglePageBackgroundColor(this.state.pageBackgroundColorDisplay);
    this.setState({
      pageBackgroundColorDisplay: !this.state.pageBackgroundColorDisplay
    });
  }
  togglePageHeaderColor1(){
    this.props.action.togglePageHeaderColor1(this.state.pageHeaderColor1Display);
    this.setState({
      pageHeaderColor1Display: !this.state.pageHeaderColor1Display
    });
  }
  togglePageHeaderColor2(){
    this.props.action.togglePageHeaderColor2(this.state.pageHeaderColor2Display);
    this.setState({
      pageHeaderColor2Display: !this.state.pageHeaderColor2Display
    });
  }


  render(){
    return(
    <div>
      <Col md={6} mdOffset={0} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <SetupForm 
        onSubmit={showResults} 
        pageBackgroundColorDisplay = {this.state.pageBackgroundColorDisplay}
        togglePageBackgroundColor = {()=>this.togglePageBackgroundColor(true)} 
        pageHeaderColor1Display = {this.state.pageHeaderColor1Display}
        togglePageHeaderColor1 = {()=>this.togglePageHeaderColor1(true)} 
        />
      </Col>
    </div>
    );
  }
}

function mapStateToProps(state, prop){
  /*the name of the reducer*/
  return{
    pageBackgroundColorDisplay:state.setup.pageBackgroundColorDisplay,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(MenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup);