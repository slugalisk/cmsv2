
export default (async function showResults(values) {
  fetch('http://localhost:5000/api/v1/reddit/apps/'+values.appId+'/oauth', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
