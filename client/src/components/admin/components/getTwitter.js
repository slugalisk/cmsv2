
export default (async function showResults(values) {
  fetch('http://localhost:3000/api/v1/twitter/apps', {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
  .then(function(res){
    console.log(res);
  })
});
