
export default (async function showResults(values) {
  fetch("http://localhost:5000/getTwitterAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetTwitterAppidTokensTokenidAppid,
      tokenid: values.GetTwitterAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
