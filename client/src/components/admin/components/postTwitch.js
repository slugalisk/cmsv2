
export default (async function showResults(values) {
  console.log(values);
  fetch('http://localhost:3000/api/v1/twitch/apps', {
    credentials: 'include',
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'X-Client-Id': values.clientid,
      'X-Token': values.token,
    },
    body: JSON.stringify({
      'clientKey': values.key,
      'clientSecret': values.secret,
    }),
  })
  .then(async(response) => console.log(response))
});

