import React from 'react';
import showResults from './components/showResults';
import SetupForm from './forms/SetupForm';
import SetupSectionForm from './forms/SetupSectionForm';

import {Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../../actions/setup';

class Setup extends React.Component{

  render(){
    const adminSetupPreview={
      backgroundColor: this.props.colorChoice['colorPickerPageBackground'],
    }
    const adminSetupPreviewSection={
      border: "1px solid " + this.props.colorChoice['colorPickerSectionBorder'],
      backgroundColor: this.props.colorChoice['colorPickerSectionBackground'],
    }
    const adminSetupPreviewHeader={
      background:"linear-gradient(90deg,"+this.props.colorChoice['colorPickerPageHeader1']+","+this.props.colorChoice['colorPickerPageHeader2']+")",
    }
    const adminSetupPreviewSectionHeader={
      color: this.props.colorChoice['colorPickerHeaderColor'],
    }
    const adminSetupPreviewSectionBody={
      color: this.props.colorChoice['colorPickerSectionBody'],
    }
    const adminSetupPreviewSectionLink={
      color: this.props.colorChoice['colorPickerSectionLink'],
    }
    
    return(
    <div className='admin_form_wrapper'>
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

      <Row>
        <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
            <div className='title_row'>
              Setup
            </div>
          </Col>
        </Col>
      </Row>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <div className='title_row'>
            Site Background
          </div>
          <SetupForm 
          onSubmit={showResults} 
          colorDisplay={this.props.colorDisplay}
          colorChoice={this.props.colorChoice}
          dispatch={this.props.dispatch}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <div className='title_row'>
            Site Sections
          </div>
          <SetupSectionForm 
          onSubmit={showResults} 
          colorDisplay={this.props.colorDisplay}
          colorChoice={this.props.colorChoice}
          dispatch={this.props.dispatch}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <div 
            className='admin_setup_preview' 
            style={adminSetupPreview}
          >
            <Col 
              className='admin_setup_preview__header'
              style={adminSetupPreviewHeader}
            >
            </Col>
            <Col 
              md={10} 
              mdOffset={1} 
              sm={10} 
              smOffset={1} 
              xs={10} 
              xsOffset={1} 
              className='admin_setup_preview__section'
              style={adminSetupPreviewSection}
            >
              <div 
                className='admin_setup_preview__section__header'
                style={adminSetupPreviewSectionHeader}
              >
                Section
              </div>
              <div
                className='admin_setup_preview__section__body'
                style={adminSetupPreviewSectionBody}
              >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua.
              </div>
              <Link 
                to='/admin/setup'
                className='admin_setup_preview__section__link'
                style={adminSetupPreviewSectionLink}
              >
                Link
              </Link>
            </Col>
          </div>
        </Col>
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