import {
  REQUEST_HEADERS,
  RECEIVE_HEADERS,
} from '../actions/api'

const DEFAULT_STATE={
  xClientId: 1,
  xToken: 1,
  setCookie: 1,
}
export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    
    case REQUEST_HEADERS:
      return {...state}

    case RECEIVE_HEADERS:
      console.log(payload.clientId);
      console.log(payload.token);
      console.log(payload.cookie);
      return {
        ...state,
        xClientId: payload.clientId,
        xToken: payload.token,
      };

    default:
      return state;
  }
};
