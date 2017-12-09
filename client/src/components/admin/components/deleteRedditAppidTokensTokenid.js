
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteRedditAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteRedditAppidTokensTokenidAppid,
      tokenid: values.DeleteRedditAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
