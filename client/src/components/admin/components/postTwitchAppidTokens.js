
export default (async function showResults(values) {
  fetch('http://localhost:5000/api/v1/twitch/apps/'+values.appId+'/tokens', {
    method: 'POST',
    body: JSON.stringify({
      'expiry': '2017-12-11T23:18:12.504Z',
      'refreshToken': 'string',
      'token': 'string',
      'tokenType': 'string'
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
