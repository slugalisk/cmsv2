
export default (async function showResults(values) {
  console.log(values.key);
  /*fetch("http://localhost:5000/postReddit", {
    method: 'POST',
    body: JSON.stringify({
      consumerKey: values.PostRedditKey,
      consumerSecret: values.PostRedditSecret
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })*/
});
