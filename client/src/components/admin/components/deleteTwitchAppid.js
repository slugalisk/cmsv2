
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteTwitchAppid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteTwitchAppid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
