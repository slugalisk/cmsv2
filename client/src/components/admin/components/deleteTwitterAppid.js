
export default (async function showResults(values) {
  fetch('http://localhost:5000/api/v1/twitter/apps'+ values.appId, {
    method: 'DELETE',
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
