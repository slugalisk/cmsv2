
export default (async function showResults(values) {
  fetch("http://localhost:5000/putTwitterAppidTokensTokenid", {
    method: 'POST',
    body: JSON.stringify({
      appid: values.PutTwitterAppidTokensTokenidAppid,
      tokenid: values.PutTwitterAppidTokensTokenidTokenid,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
