
export default (async function showResults(values) {
  fetch("http://localhost:5000/postTwitter", {
    method: 'POST',
    body: JSON.stringify({
      consumerKey: values.PostTwitterKey,
      consumerSecret: values.PostTwitterSecret
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
