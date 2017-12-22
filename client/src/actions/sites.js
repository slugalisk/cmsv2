import {slugGet, slugPost, slugPut, slugDelete} from './slug';

export const REQUEST_APP = Symbol('REQUEST_APP')
export const RECEIVE_APP = Symbol('RECEIVE_APP')

/* --- */

function requestApp() {
  return {
    type: REQUEST_APP,
  }
}

function receiveApp(data) {
  return {
    type: RECEIVE_APP,
    data: data,
  };
}

/* GET /sites */
export function getSites(values){
  return (dispatch, getState) => {
    slugGet(
      dispatch, 
      getState, 
      '/api/v1/sites'
    )
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /sites */
export function postSites(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/sites', 
    {
      'enabled': true,
      'name': values.name,
      'readOnly': true
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /sites/{siteId} */
export function getSitesSiteId(values){
  return (dispatch, getState) => {
  slugGet(
    dispatch, 
    getState, 
    '/api/v1/sites/'+values.siteId
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /sites/{siteId} */
export function putSitesSiteId(values){
  return (dispatch, getState) => {
  slugPut(
    dispatch, 
    getState, 
    '/api/v1/sites/'+values.siteId,
    {
      "enabled": true,
      "name": "string",
      "readOnly": true
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* DELETE /sites/{siteIdId} */
export function deleteSitesSiteId(values){
  return (dispatch, getState) => {
  slugDelete(
    dispatch, 
    getState, 
    '/api/v1/sites/'+values.siteId
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /sites/{siteId}/domains */
export function getSitesSiteIdDomains(values){
  return (dispatch, getState) => {
  slugGet(
    dispatch, 
    getState, 
    '/api/v1/sites/'+values.siteId+'/domains'
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /sites/{siteId}/domains */
export function postSitesSiteIdDomains(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/sites/'+values.siteId+'/domains', 
    {
      "env": 0,
      "host": "string"
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /sites/{siteId}/domains/{domainId} */
export function getSitesSiteIdDomainsDomainId(values){
  return (dispatch, getState) => {
    slugGet(
      dispatch, 
      getState, 
      '/api/v1/sites/'+values.siteId+'/tokens/'+values.domainId
    )
    .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /sites/{siteId}/domains/{domainId} */
export function putSitesSiteIdDomainsDomainId(values){
  return (dispatch, getState) => {
  slugPut(
    dispatch, 
    getState, 
    '/api/v1/sites/'+values.siteId+'/domains/'+values.domainId, 
    {
      "env": 0,
      "host": "string"
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* DELETE /sites/{siteId}/domains/{domainId} */
export function deleteRedditAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugDelete(
      dispatch, 
      getState, 
      '/api/v1/sites/'+values.siteId+'/domains/'+values.domainId
    )
    .then(data => dispatch(receiveApp(data)));
  }
}