
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteGoogleAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteGoogleAppidTokensTokenidAppid,
      tokenid: values.DeleteGoogleAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
