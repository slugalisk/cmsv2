export const addToCart = (item) =>{
  console.log("adding item ", item);
  return{
    type: 'add',
    item
  };
}

export const testaction = (item) =>{
  console.log("TEST ACTION ", item);
  return{
    type: 'testcase',
    item
  };
}

export const setMapKey = (key, value) => {
  return{
    type: 'setmapkey',
    key,
    value,
  };
}

const requestTweets = () => ({
  type: 'requestTweets',
  loading: true,
  error: null,
})

export const REQUEST_POSTS = Symbol('REQUEST_POSTS')
export const RECEIVE_POSTS = Symbol('RECEIVE_POSTS')

function requestPosts() {
  return {
    type: REQUEST_POSTS,
  
  }
}
function receivePosts(json) {
  /*console.log(json.data["0"].body)*/
  return {
    type: RECEIVE_POSTS,
    posts: json.data,
    receivedAt: Date.now(),
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