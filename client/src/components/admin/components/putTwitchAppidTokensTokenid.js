
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/twitch/apps/'+values.appId+'/tokens/'+values.tokenId, {
    method: 'PUT',
    body: JSON.stringify({
      'expiry': '2017-12-11T23:23:07.152Z',
      'refreshToken': 'string',
      'token': 'string',
      'tokenType': 'string'
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
