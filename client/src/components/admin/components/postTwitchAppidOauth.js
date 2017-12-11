
export default (async function showResults(values) {
  fetch("http://localhost:5000/postTwitchAppidOauth", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PostTwitchAppidOauth,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
