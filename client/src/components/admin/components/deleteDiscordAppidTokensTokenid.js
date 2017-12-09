
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteDiscordAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteDiscordAppidTokensTokenidAppid,
      tokenid: values.DeleteDiscordAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
