
export default (async function showResults(values) {
  fetch("http://localhost:5000/getDiscordAppidTokens", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetDiscordAppidTokens,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
