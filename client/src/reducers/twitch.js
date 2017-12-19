import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_APP,
  RECEIVE_APP,
} from '../actions/twitch'

const DEFAULT_STATE={
  posts: [],
  appData: {},
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

    case REQUEST_APP:
      return {...state}

    case RECEIVE_APP:
      console.log('REDUCER REDUCER REDUCER');
      console.log(payload.data);
      return {
        ...state,
        appData: {
          appId: payload.appId,
          data: payload.data,
        },
      };

   default:
      return state;
  }
};
