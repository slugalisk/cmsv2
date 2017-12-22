import React from 'react';

import {Row, Col} from 'react-bootstrap';
import { Provider } from 'react-redux';

import postSite from './components/postSite';
import putSite from './components/putSite';
import deleteSite from './components/deleteSite';
import getSiteDomains from './components/getSiteDomains';
import postSiteDomain from './components/postSiteDomain';

import GetSitesForm from './forms/GetSitesForm';

import PostSiteForm from './forms/PostSiteForm';
import PutSiteForm from './forms/PutSiteForm';
import DeleteSiteForm from './forms/DeleteSiteForm';
import SiteDomainsForm from './forms/SiteDomainsForm';
import PostSiteDomainForm from './forms/PostSiteDomainForm';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ApiActions from '../../actions/api';
import * as SitesActions from '../../actions/sites';

class SiteDomain extends React.Component{
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
          <GetSitesForm 
            onSubmit={values=>this.props.sitesAction.getSites(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostSiteForm onSubmit={postSite}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PutSiteForm onSubmit={putSite}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteSiteForm onSubmit={deleteSite}/>
        </Col>
      </Col>
    
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <SiteDomainsForm onSubmit={getSiteDomains}/>
        </Col>
      </Col>
    
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostSiteDomainForm onSubmit={postSiteDomain}/>
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
    sitesAction: bindActionCreators(SitesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteDomain);