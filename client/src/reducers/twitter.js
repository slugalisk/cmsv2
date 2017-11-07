import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions/twitter'

const DEFAULT_STATE={
  cart: [],
  map: {},
  posts: [],
}
export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case 'add':
      return[...state, payload.item];

    case 'testcase':
      console.log("THIS IS IN THE REDUCER");
      return {...state, cart: [...state.cart, "PAYLOAD ITEM"]};

    case 'setmapkey':
      return {...state, map: {...state.map, [payload.key]:payload.value}};

    case 'apirequest':
      console.log('reducer apirequest');
      return {
        ...state, 
        map: {
          ...state.map, 
          [payload.key]:payload.value,
        },
      };

    case 'requestTweets':
      console.log('reducer requesttweets');
      return{
        ...state,
        map: [
          ...state.posts, 
        //  [payload.key]
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
