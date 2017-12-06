
export default (async function showResults(values) {
  fetch("http://localhost:5000/getRedditAppidTokens", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetRedditAppidTokens,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
