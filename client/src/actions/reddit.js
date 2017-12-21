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

/* GET /reddit/apps */
export function getReddit(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/reddit/apps')
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /reddit/apps */
export function postReddit(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/reddit/apps', 
    {
      clientKey: values.key, 
      clientSecret:values.secret
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /reddit/apps/{appId} */
export function getRedditAppId(values){
  return (dispatch, getState) => {
  slugGet(dispatch, getState, '/api/v1/reddit/apps/'+values.appId)
  .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /reddit/apps/{appId} */
export function putRedditAppId(values){
  return (dispatch, getState) => {
  slugPut(
    dispatch, 
    getState, 
    '/api/v1/reddit/apps/'+values.appId,
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
/* DELETE /reddit/apps/{appId} */
export function deleteRedditAppId(values){
  return (dispatch, getState) => {
  slugDelete(dispatch, getState, '/api/v1/reddit/apps/'+values.appId)
  .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /reddit/apps/{appId}/oauth */
export function postRedditOauth(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/reddit/apps/'+values.appId+'/oauth', 
    {}
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /reddit/apps/{appId}/tokens */
export function getRedditAppIdTokens(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/reddit/apps/'+values.appId+'/tokens')
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /reddit/apps/{appId}/tokens */
export function postRedditAppIdTokens(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/reddit/apps/'+values.appId+'/tokens', 
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
/* GET /reddit/apps/{appId}/tokens/{tokenId} */
export function getRedditAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/reddit/apps/'+values.appId+'/tokens/'+values.tokenId)
    .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /reddit/apps/{appId}/tokens/{tokenId} */
export function putRedditAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugPut(
      dispatch, 
      getState, 
      '/api/v1/reddit/apps/'+values.appId+'/tokens/'+values.tokenId,
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
/* DELETE /reddit/apps/{appId}/tokens/{tokenId} */
export function deleteRedditAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugDelete(dispatch, getState, '/api/v1/reddit/apps/'+values.appId+'/tokens/'+values.tokenId)
    .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /reddit/apps/{appId}/widgets/ */
export function getRedditAppIdWidgets(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/reddit/apps/'+values.appId+'/widgets')
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /reddit/apps/{appId}/widgets */
export function postRedditAppIdWidgets(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/reddit/apps/'+values.appId+'/widgets', 
    { 
      "limit": 0,
      "subreddit": "string"
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /reddit/apps/{appId}/widgets/{widgetId} */
export function getRedditAppIdWidgetsWidgetId(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/reddit/apps/'+values.widgetId+'/widgets/'+values.widgetId)
    .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /reddit/apps/{appId}/widgets/{widgetId} */
export function putRedditAppIdWidgetsWidgetId(values){
  return (dispatch, getState) => {
    slugPut(
      dispatch, 
      getState, 
      '/api/v1/reddit/apps/'+values.appId+'/widgets/'+values.widgetId,
      {
        "limit": 0,
        "subreddit": "string"
      }
    )
    .then(data => dispatch(receiveApp(data)));
  }
}
/* DELETE /reddit/apps/{appId}/widgets/{widgetId} */
export function deleteRedditAppIdWidgetsWidgetId(values){
  return (dispatch, getState) => {
    slugDelete(dispatch, getState, '/api/v1/reddit/apps/'+values.appId+'/widgets/'+values.widgetId)
    .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /reddit/apps/{appId}/widgets/{widgetId}/feed */
export function getRedditAppIdWidgetsWidgetIdFeed(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/reddit/apps/'+values.appId+'/widgets/'+values.widgetId+'/feed')
    .then(data => dispatch(receiveApp(data)));
  }
}