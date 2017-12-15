import axios from 'axios';

export default (async function showResults(values) {
  console.log(values);

  {
    values.appId 
    
    ?

    axios.get(values.url + '/' + values.appId, {
      method: 'GET',
      headers: new Headers({ 
        'Content-Type': 'application/json',
        'x-client-id': values.xClientId,
        'x-token': values.xToken,
      })
    })
    .then(async(response) => console.log(response))

    :

    axios.get(values.url, {
      method: 'GET',
      headers: new Headers({ 
        'Content-Type': 'application/json',
        'x-client-id': values.xClientId,
        'x-token': values.xToken,
      })
    })
    .then(async(response) => console.log(response))
  }

});

