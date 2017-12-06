
export default (async function showResults(values) {
  fetch("http://localhost:5000/getTwitterAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetTwitterAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
