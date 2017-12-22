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

/* GET /auth/credentials */
export function getAuth(values){
  return (dispatch, getState) => {
    slugGet(
      dispatch, 
      getState, 
      '/api/v1/auth/credentials'
    )
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /auth/credentials */
export function postAuth(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/auth/credentials', 
    {
      "email": values.email,
      "password": values.password    
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* DELETE /auth/credentials/{credentialsId} */
export function deleteAuthCredentialsId(values){
  return (dispatch, getState) => {
  slugDelete(
    dispatch, 
    getState, 
    '/api/v1/auth/credentials/'+values.credentialsId
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /auth/credentials/{credentialsId}/replacements */
export function postAuthCredentialsIdReplacements(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/auth/credentials/'+values.credentialsId+'/replacements',
    {
      "current": {
        "email": values.currentEmail,
        "password": values.currentPassword
      },
      "replacement": {
        "email": values.replacementEmail,
        "password": values.replacementPassowrd
      }
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /auth/credentials/{credentialsId}/replacements/{replacementId} */
export function postAuthCredentialsIdReplacements(values){
  return (dispatch, getState) => {
  slugPut(
    dispatch, 
    getState, 
    '/api/v1/auth/credentials/'+values.credentialsId+'/replacements/'+values.replacementId,
    {
      "code": values.code,
      "credentials": {
        "email": values.email,
        "password": values.password
      }
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* DELETE /auth/credentials/{credentialsId}/replacements/{replacementId} */
export function postAuthCredentialsIdReplacements(values){
  return (dispatch, getState) => {
  slugDelete(
    dispatch, 
    getState, 
    '/api/v1/auth/credentials/'+values.credentialsId+'/replacements/'+values.replacementId
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /auth/recovery */
export function postAuthRecovery(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/auth/recovery', 
    {
      "email": values.email 
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /auth/sessions */
export function postAuthSessions(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/auth/sessions', 
    {
      "email": values.email,
      "password": values.password
    }
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
export function deleteSitesSiteIdDomainsDomainId(values){
  return (dispatch, getState) => {
    slugDelete(
      dispatch, 
      getState, 
      '/api/v1/sites/'+values.siteId+'/domains/'+values.domainId
    )
    .then(data => dispatch(receiveApp(data)));
  }
}