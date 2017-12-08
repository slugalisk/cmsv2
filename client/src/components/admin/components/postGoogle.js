
export default (async function showResults(values) {
  fetch("http://localhost:5000/postGoogle", {
    method: 'POST',
    body: JSON.stringify({
      key: values.PostGoogleKey,
      secret: values.PostGoogleSecret
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
