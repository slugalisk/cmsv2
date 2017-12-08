
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteGoogleAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteGoogleAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
