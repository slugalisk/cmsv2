
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/twitch/apps'+ values.appId, {
    method: 'DELETE',
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
