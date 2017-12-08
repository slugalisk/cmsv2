
export default (async function showResults(values) {
  fetch("http://localhost:5000/putGoogleAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PutGoogleAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
