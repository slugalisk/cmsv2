
export default (async function showResults(values) {
  fetch("http://localhost:5000/deletesite", {
    method: 'POST',
    body: JSON.stringify({
      id: values.DeleteSiteSiteId,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
