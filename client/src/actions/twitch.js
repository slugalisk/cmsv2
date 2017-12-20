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

/* GET /twitch/apps */
export function getTwitch(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/twitch/apps')
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /twitch/apps */
export function postTwitch(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/twitch/apps/'+values.appId, 
    {'clientKey': values.key, 'clientSecret':values.secret}
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /twitch/apps/{appId} */
export function getTwitchAppId(values){
  return (dispatch, getState) => {
  slugGet(dispatch, getState, '/api/v1/twitch/apps/'+values.appId)
  .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /twitch/apps/{appId} */
export function putTwitchAppId(values){
  return (dispatch, getState) => {
  slugPut(
    dispatch, 
    getState, 
    '/api/v1/twitch/apps/'+values.appId,
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
/* DELETE /twitch/apps/{appId} */
export function deleteTwitchAppId(values){
  return (dispatch, getState) => {
  slugDelete(dispatch, getState, '/api/v1/twitch/apps/'+values.appId)
  .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /twitch/apps/{appId}/oauth */
export function postTwitchOauth(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/twitch/apps/'+values.appId+'/oauth', 
    {}
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /twitch/apps/{appId}/tokens */
export function getTwitchAppIdTokens(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/twitch/apps/'+values.appId+'/tokens')
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /twitch/apps/{appId}/tokens */
export function postTwitchAppIdTokens(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/twitch/apps/'+values.appId+'/tokens', 
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
/* GET /twitch/apps/{appId}/tokens/{tokenid} */
export function getTwitchAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/twitch/apps/'+values.appId+'/tokens/'+values.tokenId)
    .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /twitch/apps/{appId}/tokens/{tokenid} */
export function putTwitchAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugPut(
      dispatch, 
      getState, 
      '/api/v1/twitch/apps/'+values.appId+'/tokens/'+values.tokenId,
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
/* DELETE /twitch/apps/{appId}/tokens/{tokenid} */
export function deleteTwitchAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugDelete(dispatch, getState, '/api/v1/twitch/apps/'+values.appId+'/tokens/'+values.tokenId)
    .then(data => dispatch(receiveApp(data)));
  }
}
