
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/reddit/apps', {
    method: 'POST',
    body: JSON.stringify({
      'clientKey': values.key,
      'clientSecret': values.secret,
      'name': 'shodyra'
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
