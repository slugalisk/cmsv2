
export default (async function showResults(values) {
  fetch("http://localhost:5000/getTwitchAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.GetTwitchAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
