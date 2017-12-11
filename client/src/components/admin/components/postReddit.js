
export default (async function showResults(values) {
  fetch('http://localhost:5000/api/v1/reddit/apps', {
    method: 'POST',
    body: JSON.stringify({
      key: values.key,
      secret: values.secret
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
