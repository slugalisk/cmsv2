
export default (async function showResults(values) {
  fetch("http://localhost:5000/postRedditAppidWidgets", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PostRedditAppidWidgets,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
