
export default (async function showResults(values) {
  fetch("http://localhost:5000/postSite", {
    method: 'POST',
    body: JSON.stringify({
      siteid: values.PostSiteId,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
