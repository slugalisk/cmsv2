
export default (async function showResults(values) {
  fetch("http://localhost:5000/postTwitterAppidWidgets", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PostTwitterAppidWidgets,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});