
export default (async function showResults(values) {
  fetch("http://localhost:5000/deleteTwitterAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.DeleteTwitterAppidTokensTokenidAppid,
      tokenid: values.DeleteTwitterAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
