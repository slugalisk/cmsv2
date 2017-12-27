import React from 'react';

import {Row, Col} from 'react-bootstrap';
import { Provider } from 'react-redux';

import GetPeopleForm from './forms/GetPeopleForm';
import GetPeoplePersonIdForm from './forms/GetPeoplePersonIdForm';
import PutPeoplePersonIdForm from './forms/PutPeoplePersonIdForm';
import DeletePeoplePersonIdForm from './forms/DeletePeoplePersonIdForm';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ApiActions from '../../actions/api';
import * as PeopleActions from '../../actions/auth';

class SitePeople extends React.Component{
  testfunc(){
    this.props.action.getApiIfNeeded();
  }
  render(){
    return(
 
    <div className='admin_form_wrapper'>
        <button onClick={()=>this.testfunc()}>test</button>
      <Col 
        md={4} 
        sm={6} 
        xs={12} 
        className='admin_column__1'
      >
      </Col>
      <Col 
        md={4} 
        mdOffset={4} 
        sm={6} 
        smOffset={6} 
        xs={12} 
        xsOffset={0}
        className='admin_column__2'>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetPeopleForm 
            onSubmit={values=>this.props.authAction.getPeople(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetPeoplePersonIdForm
            onSubmit={values=>this.props.authAction.getPeoplePersonId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PutPeoplePersonIdForm 
            onSubmit={values=>this.props.authAction.putPeoplePersonId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeletePeoplePersonIdForm 
            onSubmit={values=>this.props.authAction.deletePeoplePersonId(values)}
          />
        </Col>
      </Col>

    </div>
    );
  }
}

function mapStateToProps(state, prop){
  /*the name of the reducer*/
  return{
    xClientId: state.api.xClientId,
    xToken: state.api.xToken,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(ApiActions, dispatch),
    authAction: bindActionCreators(PeopleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SitePeople);