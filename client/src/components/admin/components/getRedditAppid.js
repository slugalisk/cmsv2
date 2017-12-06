
export default (async function showResults(values) {
  fetch("http://localhost:5000/getRedditAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetRedditAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
