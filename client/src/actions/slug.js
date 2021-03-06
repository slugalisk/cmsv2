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
    options.body = JSON.stringify(data);
    //options.data = JSON.stringify(data);
  }
  console.log(options);
  return fetch(urlBase + path, options)
  .then((rs) => rs.text())
  .then((text) => text.length ? JSON.parse(text) : {})
  .catch((error) => {
		throw error;
	});
    //.then(rs => rs.json());
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