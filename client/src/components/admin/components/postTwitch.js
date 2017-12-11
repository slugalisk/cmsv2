
export default (async function showResults(values) {
  fetch("http://localhost:5000/postTwitch", {
    method: 'POST',
    body: JSON.stringify({
      consumerKey: values.PostTwitchKey,
      consumerSecret: values.PostTwitchSecret
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
