
export default (async function showResults(values) {
  fetch("http://localhost:5000/testreceive", {
    method: 'POST',
    body: JSON.stringify({
      username:'asdf',
      password:'fasd',
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
});
