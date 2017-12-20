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

/* GET /discord/apps */
export function getDiscord(values){
  console.log("asdfff");
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/discord/apps')
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /discord/apps */
export function postDiscord(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/discord/apps', 
    {
      clientKey: values.key, 
      clientSecret:values.secret
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /discord/apps/{appId} */
export function getDiscordAppId(values){
  return (dispatch, getState) => {
  slugGet(dispatch, getState, '/api/v1/discord/apps/'+values.appId)
  .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /discord/apps/{appId} */
export function putDiscordAppId(values){
  return (dispatch, getState) => {
  slugPut(
    dispatch, 
    getState, 
    '/api/v1/discord/apps/'+values.appId,
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
/* DELETE /discord/apps/{appId} */
export function deleteDiscordAppId(values){
  return (dispatch, getState) => {
  slugDelete(dispatch, getState, '/api/v1/discord/apps/'+values.appId)
  .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /discord/apps/{appId}/oauth */
export function postDiscordOauth(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/discord/apps/'+values.appId+'/oauth', 
    {}
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /discord/apps/{appId}/tokens */
export function getDiscordAppIdTokens(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/discord/apps/'+values.appId+'/tokens')
    .then(data => dispatch(receiveApp(data)));
  }
}
/* POST /discord/apps/{appId}/tokens */
export function postDiscordAppIdTokens(values){
  return (dispatch, getState) => {
  slugPost(
    dispatch, 
    getState, 
    '/api/v1/discord/apps/'+values.appId+'/tokens', 
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
/* GET /discord/apps/{appId}/tokens/{tokenid} */
export function getDiscordAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugGet(dispatch, getState, '/api/v1/discord/apps/'+values.appId+'/tokens/'+values.tokenId)
    .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /discord/apps/{appId}/tokens/{tokenid} */
export function putDiscordAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugPut(
      dispatch, 
      getState, 
      '/api/v1/discord/apps/'+values.appId+'/tokens/'+values.tokenId,
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
/* DELETE /discord/apps/{appId}/tokens/{tokenid} */
export function deleteDiscordAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugDelete(dispatch, getState, '/api/v1/discord/apps/'+values.appId+'/tokens/'+values.tokenId)
    .then(data => dispatch(receiveApp(data)));
  }
}
