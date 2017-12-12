
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/twitter/apps', {
    method: 'POST',
    body: JSON.stringify({
      'consumerKey': values.key,
      'consumerSecret': values.secret,
      'defaultToken': {
        'secret': 'string',
        'token': 'string'
      }
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
