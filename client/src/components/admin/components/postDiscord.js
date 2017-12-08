
export default (async function showResults(values) {
  fetch("http://localhost:5000/postDiscord", {
    method: 'POST',
    body: JSON.stringify({
      key: values.PostDiscordKey,
      secret: values.PostDiscordSecret
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
