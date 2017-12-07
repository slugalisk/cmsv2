
export default (async function showResults(values) {
  fetch("http://localhost:5000/getTwitterAppidTokens", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetTwitterAppidTokens,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
