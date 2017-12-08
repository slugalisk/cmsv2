
export default (async function showResults(values) {
  fetch("http://localhost:5000/putDiscordAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PutDiscordAppidTokensTokenidAppid,
      tokenid: values.PutDiscordAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
