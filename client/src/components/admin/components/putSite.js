
export default (async function showResults(values) {
  fetch("http://localhost:5000/putSite", {
    method: 'POST',
    body: JSON.stringify({
      siteid: values.PutSiteId,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
