import axios from 'axios';

export default (async function showResults(values) {
  console.log(values);

  if (values.appId){
    axios({
      credentials: 'include',
      url: values.url + '/' + values.appId,
      method: values.method,
      headers: { 
        'Content-Type': 'application/json',
        'X-Client-Id': values.xClientId,
        'X-Token': values.xToken,
      },
      data: JSON.stringify({
        'clientKey': values.key,
        'clientSecret': values.secret,
      }),
    })
    .then(async(response) => console.log(response))
  }
  else{
    axios({
      credentials: 'include',
      url: values.url,
      method: values.method,
      headers: { 
        'Content-Type': 'application/json',
        'X-Client-Id': values.xClientId,
        'X-Token': values.xToken,
      },
      data: JSON.stringify({
        'clientKey': values.key,
        'clientSecret': values.secret,
      }),
    })
    .then(async(response) => console.log(response))
  }
});

/*
axios allows using get  with data field in even if it is empty
and not needed
when using fetch, send the key and secret with body, send as data
with axios
*/