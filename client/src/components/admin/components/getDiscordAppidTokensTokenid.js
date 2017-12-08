
export default (async function showResults(values) {
  fetch("http://localhost:5000/getDiscordAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetDiscordAppidTokensTokenidAppid,
      tokenid: values.GetDiscordAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
