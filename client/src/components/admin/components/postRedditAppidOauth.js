
export default (async function showResults(values) {
  fetch("http://localhost:5000/postRedditAppidOauth", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PostRedditAppidOauth,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
