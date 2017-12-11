export default (async function showResults(values) {
  fetch('http://localhost:5000/api/v1/auth/credentials', {
    method: 'POST',
    body: JSON.stringify({
      email: values.postAuthEmail,
      password: values.postAuthPassword,
    }),
    headers: new Headers({'Content-Type': 'application/json'})
  })
});