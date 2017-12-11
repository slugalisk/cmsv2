
export default (async function showResults(values) {
  fetch("http://localhost:5000/getTwitchAppidTokens", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetTwitchAppidTokens,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
