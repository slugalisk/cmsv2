
export default (async function showResults(values) {
  fetch("http://localhost:5000/postTwitterAppidTokens", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PostTwitterAppidTokens,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
