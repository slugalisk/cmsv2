export const REQUEST_POSTS = Symbol('REQUEST_POSTS')
export const RECEIVE_POSTS = Symbol('RECEIVE_POSTS')

function requestPosts() {
  return {
    type: REQUEST_POSTS,
  }
}
function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children,
  };
}
const fetchPosts = () => {
  return dispatch => {
    dispatch(requestPosts())
    fetch('https://www.reddit.com/user/neodestiny/comments/.json')
    //fetch(`http://149.56.128.48:30002/api/v1/twitter/widgets/1/feed`)
      .then(async(response) => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
      return dispatch(fetchPosts()); 
  }
}
