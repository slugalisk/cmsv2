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

const fetchPosts = () => {
  return dispatch => {
    dispatch(requestPosts())
    fetch(`http://149.56.128.48:30002/api/v1/twitter/widgets/1/feed`)
      .then(async(response) => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
      return dispatch(fetchPosts()); 
  }
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

/* GET /twitter/apps */
export function getTwitter(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/twitter/apps')
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /twitter/apps */
export function postTwitter(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/twitter/apps', 
    {
      clientKey: values.key, 
      clientSecret:values.secret
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /twitter/apps/{appId} */
export function getTwitterAppId(values){
  return (dispatch, getState) => {
  slugGet(dispatch, getState, '/api/v1/twitter/apps/'+values.appId)
  .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /twitter/apps/{appId} */
export function putTwitterAppId(values){
  return (dispatch, getState) => {
  slugPut(
    dispatch, 
    getState, 
    '/api/v1/twitter/apps/'+values.appId,
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
/* DELETE /twitter/apps/{appId} */
export function deleteTwitterAppId(values){
  return (dispatch, getState) => {
  slugDelete(dispatch, getState, '/api/v1/twitter/apps/'+values.appId)
  .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /twitter/apps/{appId}/oauth */
export function postTwitterOauth(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/twitter/apps/'+values.appId+'/oauth', 
    {}
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /twitter/apps/{appId}/tokens */
export function getTwitterAppIdTokens(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/twitter/apps/'+values.appId+'/tokens')
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /twitter/apps/{appId}/tokens */
export function postTwitterAppIdTokens(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/twitter/apps/'+values.appId+'/tokens', 
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
/* GET /twitter/apps/{appId}/tokens/{tokenId} */
export function getTwitterAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/twitter/apps/'+values.appId+'/tokens/'+values.tokenId)
    .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /twitter/apps/{appId}/tokens/{tokenId} */
export function putTwitterAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugPut(
      dispatch, 
      getState, 
      '/api/v1/twitter/apps/'+values.appId+'/tokens/'+values.tokenId,
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
/* DELETE /twitter/apps/{appId}/tokens/{tokenId} */
export function deleteTwitterAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugDelete(dispatch, getState, '/api/v1/twitter/apps/'+values.appId+'/tokens/'+values.tokenId)
    .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /twitter/apps/{appId}/widgets/ */
export function getTwitterAppIdWidgets(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/twitter/apps/'+values.appId+'/widgets')
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /twitter/apps/{appId}/widgets */
export function postTwitterAppIdWidgets(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/twitter/apps/'+values.appId+'/widgets', 
    { 
      "limit": 0,
      "subtwitter": "string"
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /twitter/apps/{appId}/widgets/{widgetId} */
export function getTwitterAppIdWidgetsWidgetId(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/twitter/apps/'+values.widgetId+'/widgets/'+values.widgetId)
    .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /twitter/apps/{appId}/widgets/{widgetId} */
export function putTwitterAppIdWidgetsWidgetId(values){
  return (dispatch, getState) => {
    slugPut(
      dispatch, 
      getState, 
      '/api/v1/twitter/apps/'+values.appId+'/widgets/'+values.widgetId,
      {
        "limit": 0,
        "subtwitter": "string"
      }
    )
    .then(data => dispatch(receiveApp(data)));
  }
}
/* DELETE /twitter/apps/{appId}/widgets/{widgetId} */
export function deleteTwitterAppIdWidgetsWidgetId(values){
  return (dispatch, getState) => {
    slugDelete(dispatch, getState, '/api/v1/twitter/apps/'+values.appId+'/widgets/'+values.widgetId)
    .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /twitter/apps/{appId}/widgets/{widgetId}/feed */
export function getTwitterAppIdWidgetsWidgetIdFeed(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/twitter/apps/'+values.appId+'/widgets/'+values.widgetId+'/feed')
    .then(data => dispatch(receiveApp(data)));
  }
}