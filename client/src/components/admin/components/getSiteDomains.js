
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/sites/'+values.siteId+'/domains', {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
