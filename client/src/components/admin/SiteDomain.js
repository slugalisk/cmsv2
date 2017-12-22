import React from 'react';

import {Row, Col} from 'react-bootstrap';
import { Provider } from 'react-redux';

import GetSitesForm from './forms/GetSitesForm';
import PostSitesForm from './forms/PostSitesForm';
import GetSitesSiteIdForm from './forms/GetSitesSiteIdForm';
import PutSitesSiteIdForm from './forms/PutSitesSiteIdForm';
import DeleteSitesSiteIdForm from './forms/DeleteSitesSiteIdForm';
import GetSitesSiteIdDomainsForm from './forms/GetSitesSiteIdDomainsForm';
import PostSitesSiteIdDomainsForm from './forms/PostSitesSiteIdDomainsForm';
import GetSitesSiteIdDomainsDomainIdForm from './forms/GetSitesSiteIdDomainsDomainIdForm';
import PutSitesSiteIdDomainsDomainIdForm from './forms/PutSitesSiteIdDomainsDomainIdForm';
import DeleteSitesSiteIdDomainsDomainIdForm from './forms/DeleteSitesSiteIdDomainsDomainIdForm';

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
          <PostSitesForm
            onSubmit={values=>this.props.sitesAction.postSites(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetSitesSiteIdForm 
            onSubmit={values=>this.props.sitesAction.getSitesSiteId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PutSitesSiteIdForm 
            onSubmit={values=>this.props.sitesAction.putSitesSiteId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteSitesSiteIdForm 
            onSubmit={values=>this.props.sitesAction.deleteSitesSiteId(values)}
          />
        </Col>
      </Col>
    
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetSitesSiteIdDomainsForm 
            onSubmit={values=>this.props.sitesAction.getSitesSiteIdDomains(values)}
          />
        </Col>
      </Col>
    
      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PostSitesSiteIdDomainsForm 
            onSubmit={values=>this.props.sitesAction.postSitesSiteIdDomains(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <GetSitesSiteIdDomainsDomainIdForm 
            onSubmit={values=>this.props.sitesAction.getSitesSiteIdDomainsDomainId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <PutSitesSiteIdDomainsDomainIdForm 
            onSubmit={values=>this.props.sitesAction.putSitesSiteIdDomainsDomainId(values)}
          />
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <DeleteSitesSiteIdDomainsDomainIdForm 
            onSubmit={values=>this.props.sitesAction.deleteSitesSiteIdDomainsDomainId(values)}
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
    sitesAction: bindActionCreators(SitesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteDomain);