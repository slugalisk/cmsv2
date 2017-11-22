
export default (async function showResults(values) {
  fetch("http://localhost:5000/postAuthCredentials", {
    method: 'POST',
    body: JSON.stringify({
      email: values.postAuthEmail,
      password: values.postAuthPassword,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
