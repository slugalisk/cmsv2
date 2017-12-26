import {slugGet, slugPost, slugPut, slugDelete} from './slug';

export const REQUEST_APP = Symbol('REQUEST_APP')
export const RECEIVE_APP = Symbol('RECEIVE_APP')

/* --- */

function requestApp() {
  return {
    type: REQUEST_APP,
  }
}

function receiveApp(data) {
  return {
    type: RECEIVE_APP,
    data: data,
  };
}

/* GET /people */
export function getPeople(values){
  return (dispatch, getState) => {
    slugGet(
      dispatch, 
      getState, 
      '/api/v1/people'
    )
    .then(data => dispatch(receiveApp(data)));
  }
}
/* GET /people/{personId} */
export function getPeoplePersonId(values){
  return (dispatch, getState) => {
  slugGet(
    dispatch, 
    getState, 
    '/api/v1/people/'+values.personId
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* PUT /people/{personId} */
export function putPeoplePersonId(values){
  return (dispatch, getState) => {
  slugPut(
    dispatch, 
    getState, 
    '/api/v1/people/'+values.personId,
    {
      'alias': values.alias
    }
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
/* DELETE /people/{personId} */
export function deletePeoplePersonId(values){
  return (dispatch, getState) => {
  slugDelete(
    dispatch, 
    getState, 
    '/api/v1/people/'+values.personId
  )
  .then(data => dispatch(receiveApp(data)));
  }
}
