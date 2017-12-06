
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteRedditAppidTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteRedditAppidTokenidAppid,
      tokenid: values.DeleteRedditAppidTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
