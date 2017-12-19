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

function receiveApp(appId, data) {
  return {
    type: RECEIVE_APP,
    posts: data,
  };
}

const fetchApp = (values) => {
  console.log("ACTION ACTION ACTION");
  console.log(values);
  return dispatch => {
    dispatch(requestApp())
    fetch(`http://localhost:3000/api/v1/twitch/apps`,
    {
      method: 'GET',
      credentials: 'include',
      headers: { 
      'Content-Type': 'application/json',
      'X-Client-Id': values.xClientId,
      'X-Token': values.xToken, 
    }
  })
    .then(data => dispatch(receiveApp(values.appId, data)));
  }
}
export function fetchAppIfNeeded(values){
  console.log("ACTION ACTION ACTION");
  console.log(values);
  return (dispatch, getState) => {
    return dispatch(fetchApp(values)); 
}
}



/*
const getAppById = appId => dispatch => {
  dispatch(requestApp(appId));
  return fetchApp(`http://localhost:3000/api/v1/twitch/apps`)
    .then(data => dispatch(receiveApp(appId, data)));
}
*/