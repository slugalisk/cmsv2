import {slugGet, slugPost, slugPut, slugDelete} from './slug';

export const REQUEST_POSTS = Symbol('REQUEST_POSTS')
export const RECEIVE_POSTS = Symbol('RECEIVE_POSTS')

export const REQUEST_APP = Symbol('REQUEST_APP')
export const RECEIVE_APP = Symbol('RECEIVE_APP')

function requestPosts() {
  return {
    type: REQUEST_POSTS,
  }
}
function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data,
  };
}

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

/* GET /google/apps */
export function getGoogle(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/google/apps')
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /google/apps */
export function postGoogle(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/google/apps', 
    {
      clientKey: values.key, 
      clientSecret:values.secret
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /google/apps/{appId} */
export function getGoogleAppId(values){
  return (dispatch, getState) => {
  slugGet(dispatch, getState, '/api/v1/google/apps/'+values.appId)
  .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /google/apps/{appId} */
export function putGoogleAppId(values){
  return (dispatch, getState) => {
  slugPut(
    dispatch, 
    getState, 
    '/api/v1/google/apps/'+values.appId,
    {
      "clientKey": values.key,
      "clientSecret": values.secret,
      "defaultToken": {
        "expiry": "2017-12-20T06:29:23.432Z",
        "refreshToken": "string",
        "token": "string",
        "tokenType": "string"
      }
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* DELETE /google/apps/{appId} */
export function deleteGoogleAppId(values){
  return (dispatch, getState) => {
  slugDelete(dispatch, getState, '/api/v1/google/apps/'+values.appId)
  .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /google/apps/{appId}/oauth */
export function postGoogleOauth(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/google/apps/'+values.appId+'/oauth', 
    {}
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /google/apps/{appId}/tokens */
export function getGoogleAppIdTokens(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/google/apps/'+values.appId+'/tokens')
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /google/apps/{appId}/tokens */
export function postGoogleAppIdTokens(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/google/apps/'+values.appId+'/tokens', 
    { 
      "expiry": "2017-12-20T06:32:19.988Z",
      "refreshToken": "string",
      "token": "string",
      "tokenType": "string"
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /google/apps/{appId}/tokens/{tokenid} */
export function getGoogleAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/google/apps/'+values.appId+'/tokens/'+values.tokenId)
    .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /google/apps/{appId}/tokens/{tokenid} */
export function putGoogleAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugPut(
      dispatch, 
      getState, 
      '/api/v1/google/apps/'+values.appId+'/tokens/'+values.tokenId,
      {
        "expiry": "2017-12-20T06:33:41.711Z",
        "refreshToken": "string",
        "token": "string",
        "tokenType": "string"
      }
    )
    .then(data => dispatch(receiveApp(data)));
  }
}
/* DELETE /google/apps/{appId}/tokens/{tokenid} */
export function deleteGoogleAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugDelete(dispatch, getState, '/api/v1/google/apps/'+values.appId+'/tokens/'+values.tokenId)
    .then(data => dispatch(receiveApp(data)));
  }
}
