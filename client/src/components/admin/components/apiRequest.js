import axios from 'axios';

export default (async function showResults(values) {
  
  console.log(values);

  axios.get(values.url, {
    method: 'GET',
    headers: new Headers({ 
      'Content-Type': 'application/json',
      'x-client-id': values.clientid,
      'x-token': values.token,
    })
  })
  .then(async(response) => console.log(response))
});
