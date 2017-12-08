
export default (async function showResults(values) {
  fetch("http://localhost:5000/postDiscordAppidTokens", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PostDiscordAppidOauth,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
