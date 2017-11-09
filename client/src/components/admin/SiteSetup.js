import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import showResults from './components/showResults';
import SetupForm from './forms/SetupForm';

import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../../actions/setup';

class Setup extends React.Component{

  render(){
    return(
    <div>
      <Col 
        md={6} 
        mdOffset={0} 
        sm={10} 
        smOffset={1} 
        xs={10} 
        xsOffset={1}
      >
        <SetupForm 
        onSubmit={showResults} 
        colorDisplay={this.props.colorDisplay}
        colorChoice={this.props.colorChoice}
        dispatch={this.props.dispatch}
        />
      </Col>
      <Col 
        md={6} 
        mdOffset={0} 
        sm={10} 
        smOffset={1} 
        xs={10} 
        xsOffset={1}
      >
        <div className='admin_setup_preview'>
          <Col 
            md={10} 
            mdOffset={1} 
            sm={10} 
            smOffset={1} 
            xs={10} 
            xsOffset={1} 
            className='admin_setup_preview__section'
          >
          <div className='admin_setup_preview__section__header'>
            Section
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua.
          <br/>
          <Link to='/admin/setup'>Link</Link>
          </Col>
        </div>
      </Col>
    </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Setup);