
export default (async function showResults(values) {
  fetch("http://localhost:5000/getDiscord", {
    method: 'GET',
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
