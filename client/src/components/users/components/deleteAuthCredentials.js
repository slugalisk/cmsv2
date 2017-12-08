
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteAuthCredentials", {
    method: 'POST',
    body: JSON.stringify({
      id: values.DeleteAuthCredentials,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
