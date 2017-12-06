
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteRedditAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteRedditAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
