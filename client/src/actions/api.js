
export const REQUEST_HEADERS = Symbol('REQUEST_HEADERS');
export const RECEIVE_HEADERS = Symbol('RECEIVE_HEADERS');

export const requestHeaders = () => {
  return {
    type: REQUEST_HEADERS,
  }
}

function receiveHeaders(xClientId, xToken, setCookie){

  return {
    type: RECEIVE_HEADERS,
    clientId: xClientId,
    token: xToken,
    cookie: setCookie,
  };
}
const getApi = () => {
  return dispatch => {

    //dispatch(requestHeaders())
    fetch(`http://localhost:3000/api/v1/system/time`, {
      credentials: 'include'  
    })
    .then(response=>{
      console.log(response.headers.get('set-cookie'));
      let xClientId = response.headers.get('x-client-id');
      let xToken = response.headers.get('x-token');
      let setCookie = response.headers.get('set-cookie');
      dispatch(receiveHeaders(xClientId, xToken, setCookie));
    });
  }
}

export function getApiIfNeeded() {
  return (dispatch, getState) => {
      return dispatch(getApi()); 
  }
}