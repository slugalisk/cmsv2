
export default (async function showResults(values) {
  fetch("http://localhost:5000/api/v1/auth/recovery", {
    method: 'POST',
    body: JSON.stringify({
      email: values.postAuthRecoveryEmail,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
