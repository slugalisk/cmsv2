
export default (async function showResults(values) {
  fetch("http://localhost:5000/getRedditAppidTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetRedditAppidTokenidAppid,
      tokenid: values.GetRedditAppidTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
