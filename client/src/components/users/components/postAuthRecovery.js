
export default (async function showResults(values) {
  fetch("http://localhost:3000/api/v1/auth/recovery", {
    method: 'POST',
    body: JSON.stringify({
      email: values.email,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
