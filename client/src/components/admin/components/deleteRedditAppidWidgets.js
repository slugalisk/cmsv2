
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteRedditAppidWidgets", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteRedditAppidWidgets,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
