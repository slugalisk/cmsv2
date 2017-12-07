
export default (async function showResults(values) {
  fetch("http://localhost:5000/getTwitterAppidWidgets", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetTwitterAppidWidgets,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
