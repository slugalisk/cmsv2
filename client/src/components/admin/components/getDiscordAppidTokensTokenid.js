
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/discord/apps/'+values.appId+'/tokens/'+values.tokenId, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
