
export default (async function showResults(values) {
  fetch("http://localhost:5000/getTwitchAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetTwitchAppidTokensTokenidAppid,
      tokenid: values.GetTwitchAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
