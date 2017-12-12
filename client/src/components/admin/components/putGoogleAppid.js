
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/google/apps/'+values.appId, {
    method: 'PUT',
    body: JSON.stringify({
      'clientKey': 'string',
      'clientSecret': 'string',
      'defaultToken': {
        'expiry': '2017-12-11T23:24:14.598Z',
        'refreshToken': 'string',
        'token': 'string',
        'tokenType': 'string'
      }
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
