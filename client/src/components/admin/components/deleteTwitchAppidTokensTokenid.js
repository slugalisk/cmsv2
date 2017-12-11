
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteTwitchAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteTwitchAppidTokensTokenidAppid,
      tokenid: values.DeleteTwitchAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
