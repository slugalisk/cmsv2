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

export function getTwitch(values){
  return (dispatch, getState) => {
    dispatch(requestApp());
    fetch(`http://localhost:3000/api/v1/twitch/apps`,
    {
      method: 'GET',
      credentials: 'include',
      headers: { 
      'Content-Type': 'application/json',
      'X-Client-Id': getState().api.headerContent.xClientId,
      'X-Token': getState().api.headerContent.xToken, 
    }
  })
  .then(console.log('RETURN RETURN RETURN'))
  .then(function(response) {
    return response.json();
  })
  /*
  .then(function(data) {
    console.log(data);  
  });
  */
  .then(data => dispatch(receiveApp(data)));
  }
}

export function getTwitchAppId(values){
  return (dispatch, getState) => {
    dispatch(requestApp())
    fetch(`http://localhost:3000/api/v1/twitch/apps/`+values.appId,
    {
      method: 'GET',
      credentials: 'include',
      headers: { 
      'Content-Type': 'application/json',
      'X-Client-Id': getState().api.headerContent.xClientId,
      'X-Token': getState().api.headerContent.xToken, 
    }
  })
  .then(console.log('RETURN RETURN RETURN'))
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);  
  });
    //.then(data => dispatch(receiveApp(values.appId, data)));
  }
}

/*
const getAppById = appId => dispatch => {
  dispatch(requestApp(appId));
  return fetchApp(`http://localhost:3000/api/v1/twitch/apps`)
    .then(data => dispatch(receiveApp(appId, data)));
}
*/