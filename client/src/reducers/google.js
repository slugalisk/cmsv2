import {
  REQUEST_APP,
  RECEIVE_APP,
} from '../actions/google'

const DEFAULT_STATE={
  posts: [],
  appData: {},
}
export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){

    case REQUEST_APP:
      return {...state}

    case RECEIVE_APP:
      console.log('REDUCER REDUCER REDUCER');
      console.log(payload.data);
      return {
        ...state,
        //appData: payload.data,
        appData: {...payload.data},
      };

   default:
      return state;
  }
};
