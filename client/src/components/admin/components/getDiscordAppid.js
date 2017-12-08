
export default (async function showResults(values) {
  fetch("http://localhost:5000/getDiscordAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetDiscordAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
