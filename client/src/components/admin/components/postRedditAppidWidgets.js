
export default (async function showResults(values) {
  fetch('http://localhost:5000/api/v1/discord/apps/'+values.appId+'/widgets', {
    method: 'POST',
    body: JSON.stringify({
      'limit': 0,
      'subreddit': 'string'
    }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
});
