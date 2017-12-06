
export default (async function showResults(values) {
  fetch("http://localhost:5000/getTwitter", {
    method: 'GET',
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
