export function slugFetch(dispatch, getState, path, method, data=undefined) {
  const {xClientId, xToken, urlBase} = getState().api.headerContent

  const options = {
    method: method,
    credentials: 'include',
    headers: { 
      'X-Client-Id': xClientId,
      'X-Token': xToken, 
    },
  };

  if (data !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    console.log(data);
    options.data = JSON.stringify(data);
  }

  return fetch(urlBase + path, options)
    .then(rs => rs.json());
}

export function slugGet(dispatch, getState, path) {
  return slugFetch(dispatch, getState, path, 'GET')
}

export function slugPost(dispatch, getState, path, data) {
  return slugFetch(dispatch, getState, path, 'POST', data)
}

export function slugPut(dispatch, getState, path, data) {
  return slugFetch(dispatch, getState, path, 'PUT', data)
}

export function slugDelete(dispatch, getState, path) {
  return slugFetch(dispatch, getState, path, 'DELETE')
}