
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/sites/'+values.siteId, {
    method: 'PUT',
    body: JSON.stringify({
      'enabled': true,
      'name': 'string',
      'readOnly': true
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
