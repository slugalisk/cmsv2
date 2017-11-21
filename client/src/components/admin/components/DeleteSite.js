
export default (async function showResults(values) {
  fetch("http://localhost:5000/deletesite", {
    method: 'POST',
    body: JSON.stringify({
      siteid: values.deleteSite,
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
