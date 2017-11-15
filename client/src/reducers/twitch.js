import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions/twitch'

const DEFAULT_STATE={
  posts: [],
}
export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){

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
