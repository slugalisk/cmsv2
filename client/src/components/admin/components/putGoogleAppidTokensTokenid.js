
export default (async function showResults(values) {
  fetch("http://localhost:5000/putGoogleAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PutGoogleAppidTokensTokenidAppid,
      tokenid: values.PutGoogleAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
