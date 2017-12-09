
export default (async function showResults(values) {
  fetch("http://localhost:5000/getGoogleAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetGoogleAppidTokensTokenidAppid,
      tokenid: values.GetGoogleAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
