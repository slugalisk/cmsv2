
export default (async function showResults(values) {
  fetch("http://localhost:5000/postSiteDomain", {
    method: 'POST',
    body: JSON.stringify({
      siteid: values.PostSiteDomainSiteId,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
