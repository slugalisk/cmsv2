
export default (async function showResults(values) {
  fetch("http://localhost:5000/postGoogleAppidTokens", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PostGoogleAppidOauth,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
