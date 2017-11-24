
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteAuthCredentials", {
    method: 'POST',
    body: JSON.stringify({
      credentialsId: values.DeleteAuthCredentials,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
