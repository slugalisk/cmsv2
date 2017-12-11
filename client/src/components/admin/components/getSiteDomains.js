
export default (async function showResults(values) {
  fetch("http://localhost:5000/getSiteDomains", {
    method: 'POST',
    body: JSON.stringify({
      id: values.SiteDomainsSiteId,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});