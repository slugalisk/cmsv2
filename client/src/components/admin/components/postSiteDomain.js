
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/sites/'+values.siteId+'/domains', {
    method: 'POST',
    body: JSON.stringify({
      'env': 0,
      'host': 'string'
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
