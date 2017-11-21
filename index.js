const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var request = require('request');
const cors = require('cors');

require('isomorphic-fetch');
 
var proxy = require('express-http-proxy');
const app = express();
 
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Token, X-Client-ID');
  next();
});
 /*
app.use(proxy(
  'https://slugalisk.com',
  {
      proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
          proxyReqOpts.headers.referer = 'https://slugalisk.com';
          proxyReqOpts.headers.origin = 'https://slugalisk.com';
 
          return proxyReqOpts;
      },
      userResHeaderDecorator: function(headers, userReq, userRes, proxyReq, proxyRes) {
          const cookies = headers['set-cookie'] || [];
          headers['set-cookie'] = cookies.map(c => c.replace(/;\s*Secure/, ''));
 
          return headers;
      },
      skipToNextHandlerFilter: function(proxyRes) {
          return proxyRes.statusCode === 404;
      }
  }
));*/
 
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 

/* test get */
app.get('/testget', (req, res) => {
  request('https://slugalisk.com/api/v1/sites', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      info = JSON.parse(body);
       console.log(info);
    }
  });
 
});
 

/* testpost */

app.get('/testpost', (req, res) => {
  const headers = {};
  request('https://slugalisk.com/api/v1/system/time', function (error, response, body) {
    if (!error && response.statusCode == 200) {
 
      headers['X-Client-ID'] = response.headers['x-client-id'];
      headers['X-Token'] =response.headers['x-token'];
      headers['cookie']=response.headers['set-cookie'];
      let time = JSON.parse(body).time;
      console.log(time);
      postsite(headers['X-Client-ID'], headers['X-Token'], headers['cookie'], time);
    }
  });
 });
 
 function postsite(xclientid, xtoken, cookie, time){
  console.log(xclientid.toString());
  console.log(xtoken.toString());
  console.log(cookie.toString().replace(' HttpOnly; Secure', ''));
 
  var options = {
    url: 'https://slugalisk.com/api/v1/sites',
    method: 'POST',
    headers: {
      'origin': 'https://slugalisk.com',
      'Content-Type': 'application/json',
      'X-Client-ID': xclientid.toString(),
      'X-Token': xtoken.toString(),
      'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
    },
    "createdAt": time,
    "enabled": true,
    "id": "12",
    "name": "string",
    "readOnly": true,
    "updatedAt": time,
  };
  request(options, function(err, res, body) {
    if (res) {
      console.log(body);
    }
    else{
      console.log(err);
    }
  });
 }

 /* test put */

 app.get('/testput', (req, res) => {
  const headers = {};
 
  request('https://slugalisk.com/api/v1/system/time', function (error, response, body) {
    if (!error && response.statusCode == 200) {
 
      headers['X-Client-ID'] = response.headers['x-client-id'];
      headers['X-Token'] =response.headers['x-token'];
      headers['cookie']=response.headers['set-cookie'];
      let time = JSON.parse(body).time;
      console.log(time);
      postecho(headers['X-Client-ID'], headers['X-Token'], headers['cookie'], time);
    }
  });
 });
 
 function postecho(xclientid, xtoken, cookie, time){
  console.log(xclientid.toString());
  console.log(xtoken.toString());
  console.log(cookie.toString().replace(' HttpOnly; Secure', ''));
 
  var options = {
    url: 'https://slugalisk.com/api/v1/sites',
    method: 'PUT',
    headers: {
      'origin': 'https://slugalisk.com',
      'Content-Type': 'application/json',
      'X-Client-ID': xclientid.toString(),
      'X-Token': xtoken.toString(),
      'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
    },
    "createdAt": time,
    "enabled": true,
    "id": "298655507817037826",
    "name": "string",
    "readOnly": true,
    "updatedAt": time,
  };
  request(options, function(err, res, body) {
    if (res) {
      console.log(body);
    }
    else{
      console.log(err);
    }
  });
 }



 /*delete*/

 app.post('/deletesite', (req, res)=>{
  deleteSiteTime(req.body.siteid);
 res.end('receive complete');
});

function deleteSiteTime(siteid){
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
      console.log(body);
      headers['X-Client-ID'] = response.headers['x-client-id'];
      headers['X-Token'] =response.headers['x-token'];
      headers['cookie']=response.headers['set-cookie'];
      let time = JSON.parse(body).time;

      deleteSite(headers['X-Client-ID'], headers['X-Token'], headers['cookie'], time, siteid);

    }
    else{
      console.log(error);
    }
  });
 }

 function deleteSite(xclientid, xtoken, cookie, time, siteid){
  var options = {
    url: 'https://slugalisk.com/api/v1/sites/'+siteid,
    method: 'DELETE',
    headers: {
      'origin': 'https://slugalisk.com',
      'Content-Type': 'application/json',
      'X-Client-ID': xclientid.toString(),
      'X-Token': xtoken.toString(),
      'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
    },
    "createdAt": time,
    "enabled": true,
    "name": "string",
    "readOnly": true,
    "updatedAt": time,
  };
  request(options, function(err, res, body) {
    if (res) {
      console.log(body);
    }
    else{
      console.log(err);
    }
  });
 }
 
 /*get ids*/
 app.get('/getids', (req, res) => {
   let arrayOfIds=[];
  request('https://slugalisk.com/api/v1/sites', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      info = JSON.parse(body);

      for (let i in info.data){
        arrayOfIds.push(info.data[i].id);
      }
      
      res.json(arrayOfIds);
    }
  });
 
});
 
 



// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
 
const port = process.env.PORT || 5000;
app.listen(port);
 
console.log(`server started`);