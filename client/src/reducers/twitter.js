import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions/twitter'

const DEFAULT_STATE={
  posts: [],
}
export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case 'setmapkey':
      return {...state, map: {...state.map, [payload.key]:payload.value}};

    case 'requestTweets':
      return{
        ...state,
        map: [
          ...state.posts,
        ]
      }
      
    case REQUEST_POSTS:
      return {...state}

    case RECEIVE_POSTS:

      return {
        ...state,
        posts: [
          ...payload.posts,
        ],
      };

    default:
      return state;
  }
};
