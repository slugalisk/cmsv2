
export default (async function showResults(values) {
  fetch('http://localhost:5000/api/v1/twitter/apps/'+values.appId+'/tokens', {
    method: 'POST',
    body: JSON.stringify({
      'secret': 'string',
      'token': 'string'
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
