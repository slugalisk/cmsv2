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

export function slugFetch(dispatch, getState, path){
  const {xClientId, xToken, urlBase} = getState().api.headerContent
  fetch(urlBase + path,
    {
      method: 'GET',
      credentials: 'include',
      headers: { 
      'Content-Type': 'application/json',
      'X-Client-Id': xClientId,
      'X-Token': xToken, 
    }
  })
  .then(function(response) {return response.json();})
  .then(data => dispatch(receiveApp(data)));
}

export function getTwitch(values){
  return (dispatch, getState) => {
    slugFetch(dispatch, getState, '/api/v1/twitch/apps');
  }
}

export function getTwitchAppId(values){
  return (dispatch, getState) => {
    slugFetch(dispatch, getState, '/api/v1/twitch/apps/'+values.appId);
  }
}

export function getTwitchAppIdTokens(values){
  return (dispatch, getState) => {
    slugFetch(dispatch, getState, '/api/v1/twitch/apps/'+values.appId+'/tokens');
  }
}

export function getTwitchAppIdTokensTokenId(values){
  return (dispatch, getState) => {
    slugFetch(dispatch, getState, '/api/v1/twitch/apps/'+values.appId+'/tokens/'+values.tokenId);
  }
}
