
export default (async function showResults(values) {
  fetch("http://localhost:5000/getGoogleAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetGoogleAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
