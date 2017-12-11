
export default (async function showResults(values) {
  fetch('http://localhost:5000/api/v1/discord/apps/'+values.appId, {
    method: 'PUT',
    body: JSON.stringify({
      'clientKey': 'string',
      'clientSecret': 'string',
      'defaultToken': {
        'expiry': '2017-12-11T23:15:01.228Z',
        'refreshToken': 'string',
        'token': 'string',
        'tokenType': 'string'
      }
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
