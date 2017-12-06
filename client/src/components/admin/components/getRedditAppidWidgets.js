
export default (async function showResults(values) {
  fetch("http://localhost:5000/getRedditAppidWidgets", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetRedditAppidWidgets,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
