
export default (async function showResults(values) {
  fetch("http://localhost:5000/putDiscordAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PutDiscordAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
