import axios from 'axios';

export const REQUEST_HEADERS = Symbol('REQUEST_HEADERS');
export const RECEIVE_HEADERS = Symbol('RECEIVE_HEADERS');

export const requestHeaders = () => {
  return {
    type: REQUEST_HEADERS,
  }
}

function receiveHeaders(xClientId, xToken, setCookie){
/*
  console.log(xClientId);
  console.log(xToken);
  console.log(setCookie);
*/
  return {
    type: RECEIVE_HEADERS,
    clientId: xClientId,
    token: xToken,
    cookie: setCookie,
  };
}
const getApi = () => {
  return dispatch => {
  /*
  axios.request(
  {
    method: 'get',
    url: 'http://localhost:3000/api/v1/system/time',
    maxRedirects: 0,
    validateStatus: function(status) {
      return status >= 200 && status < 303;
    },
    })
    .then(response => {
    console.log(response.headers['set-cookie']);
  });
  */
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