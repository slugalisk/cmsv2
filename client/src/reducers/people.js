import {
  REQUEST_HEADERS,
  RECEIVE_HEADERS,
} from '../actions/people'

const DEFAULT_STATE={
  headerContent: {
    urlBase:'http://localhost:3000',
    xClientId:'',
    xToken:'',
  },
}
export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    
    case REQUEST_HEADERS:
      return {...state}

    case RECEIVE_HEADERS:
      console.log(payload.clientId);
      console.log(payload.token);
      return {
        headerContent: {
          ...state.urlBase,
          urlBase: 'http://localhost:3000',
          ...state.xClientId,
          xClientId: payload.clientId,
          ...state.xToken,
          xToken: payload.token,
        }
      };

    default:
      return state;
  }
};
