
export default (async function showResults(values) {
  fetch("http://localhost:5000/getRedditAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetRedditAppidTokensTokenidAppid,
      tokenid: values.GetRedditAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
