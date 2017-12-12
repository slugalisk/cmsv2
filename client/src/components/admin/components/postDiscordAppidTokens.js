
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/discord/apps/'+values.appId+'/tokens', {
    method: 'POST',
    body: JSON.stringify({
      'expiry': '2017-12-11T23:21:54.500Z',
      'refreshToken': 'string',
      'token': 'string',
      'tokenType': 'string'
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
