
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/discord/apps', {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
