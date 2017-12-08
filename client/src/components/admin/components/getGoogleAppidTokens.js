
export default (async function showResults(values) {
  fetch("http://localhost:5000/getGoogleAppidTokens", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetGoogleAppidTokens,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
