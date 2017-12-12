
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/reddit/apps/'+values.appId+'/tokens/'+values.tokenId, {
    method: 'DELETE',
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
