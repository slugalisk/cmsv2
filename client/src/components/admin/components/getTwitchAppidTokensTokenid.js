
export default (async function showResults(values) {
  fetch('http://localhost:5000/api/v1/twitch/apps/'+values.appId+'/tokens/'+values.tokenId, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
