
export default (async function showResults(values) {
  fetch('http://localhost:5000/api/v1/sites/'+siteId+'/domains', {
    method: 'POST',
    body: JSON.stringify({
      'env': 0,
      'host': 'string'
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
