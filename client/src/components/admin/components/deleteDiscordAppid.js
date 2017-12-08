
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteDiscordAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteDiscordAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
