
export default (async function showResults(values) {
  fetch("http://localhost:5000/putTwitchAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PutTwitchAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
