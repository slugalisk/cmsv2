
export default (async function showResults(values) {
  fetch("http://localhost:5000/putTwitchAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PutTwitchAppidTokensTokenidAppid,
      tokenid: values.PutTwitchAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
