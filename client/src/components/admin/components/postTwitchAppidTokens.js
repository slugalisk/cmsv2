
export default (async function showResults(values) {
  fetch("http://localhost:5000/postTwitchAppidTokens", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PostTwitchAppidTokens,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
