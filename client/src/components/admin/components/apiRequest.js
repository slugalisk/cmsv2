import axios from 'axios';

export default (async function showResults(values) {
  console.log(values);

  {
    values.appId 
    
    ?

    axios({
      url: values.url + '/' + values.appId,
      method: values.method,
      headers: new Headers({ 
        'Content-Type': 'application/json',
        'x-client-id': values.xClientId,
        'x-token': values.xToken,
      })
    })
    .then(async(response) => console.log(response))

    :

    axios({
      url: values.url,
      method: values.method,
      headers: new Headers({ 
        'Content-Type': 'application/json',
        'x-client-id': values.xClientId,
        'x-token': values.xToken,
      })
    })
    .then(async(response) => console.log(response))
  }

});

