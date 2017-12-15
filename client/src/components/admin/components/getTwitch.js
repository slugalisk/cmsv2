
export default (async function showResults(values) {
  
  console.log(values);
  console.log('49494949');
  /*fetch('http://localhost:3000/api/v1/twitch/apps', {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' })
  })*/
});



/*
function authorizeRequest0(requestName){
    var options = {
      url: 'https://slugalisk.com/api/v1/system/time',
      method: 'GET',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
      },
     };
    const headers = {};
    request(options, function(error, response, body) {
      if (response) {
        headers['X-Client-ID'] = response.headers['x-client-id'];
        headers['X-Token'] =response.headers['x-token'];
        headers['cookie']=response.headers['set-cookie'];
        let time = JSON.parse(body).time;
  
        requestName(
            headers['X-Client-ID'],
            headers['X-Token'],
            headers['cookie'], 
            time,
          );
      }
      else{
        console.log(error);
      }
    });
  }
  */