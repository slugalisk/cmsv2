
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteTwitterAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteTwitterAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
