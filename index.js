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

function authorizeRequest1(parameter_1, requestName){
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
          parameter_1
        );
    }
    else{
      console.log(error);
    }
  });
}


function authorizeRequest2(parameter_1, parameter_2, requestName){
  console.log(parameter_1);
  console.log(parameter_2);
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
        parameter_1, 
        parameter_2,
      );
    }
    else{
      console.log(error);
    }
  });
}

function authorizeRequest3(parameter_1, parameter_2, parameter_3, requestName){
  console.log(parameter_1);
  console.log(parameter_2);
  console.log(parameter_3);
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
        parameter_1, 
        parameter_2,
        parameter_3,
      );
    }
    else{
      console.log(error);
    }
  });
}

function authorizeRequest4(parameter_1, parameter_2, parameter_3, parameter_4, requestName){
  console.log(parameter_1);
  console.log(parameter_2);
  console.log(parameter_3);
  console.log(parameter_4);
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
        parameter_1, 
        parameter_2,
        parameter_3,
        parameter_4,
      );
    }
    else{
      console.log(error);
    }
  });
}

/* GET site */
app.get('/testget', (req, res) => {
  request('https://slugalisk.com/api/v1/sites', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      info = JSON.parse(body);
       console.log(info);
    }
  });
});
 

/* POST site */


app.post('/postSite', (req, res)=>{
  authorizeRequest1(
    req.body.id, 
    postSite
  );
 res.end('receive complete');
});

 function postSite(xclientid, xtoken, cookie, time, siteid){
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
    "id": siteid,
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
 
 /* PUT test site */

 app.post('/putSite', (req, res)=>{
  authorizeRequest1(req.body.siteid, putSite);
 res.end('receive complete');
});

 function putSite(xclientid, xtoken, cookie, time, siteid){
  var options = {
    url: 'https://slugalisk.com/api/v1/sites/'+siteid,
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
    "id": siteid,
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



 /* DELETE site*/

 app.post('/deletesite', (req, res)=>{
  authorizeRequest1(
    req.body.id, 
    deleteSite
  );
 res.end('receive complete');
});

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

/* GET /sites/{siteId}/domains */

app.post('/getSiteDomains', (req, res)=>{
  authorizeRequest1(
    req.body.id, 
    getSiteDomains
  );
 res.end('receive complete');
});

function getSiteDomains(xclientid, xtoken, cookie, time, siteid){
  console.log(siteid);
  var options = {
    url: 'https://slugalisk.com/api/v1/sites/'+siteid+'/domains',
    method: 'GET',
    headers: {
      'origin': 'https://slugalisk.com',
      'Content-Type': 'application/json',
      'X-Client-ID': xclientid.toString(),
      'X-Token': xtoken.toString(),
      'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
    },
  };
  request(options, function(err, res, body) {
    if (res) {
      info = JSON.parse(body);
      console.log(info);
    }
    else{
      console.log(err);
    }
  });
}

 /* POST site domain */

 app.post('/postSiteDomain', (req, res)=>{
  authorizeRequest1(
    req.body.id, 
    postSiteDomain
  );
 res.end('receive complete');
});

 function postSiteDomain(xclientid, xtoken, cookie, time, siteid){
  var options = {
    url: 'https://slugalisk.com/api/v1/sites/'+siteid+'/domains',
    method: 'POST',
    headers: {
      'origin': 'https://slugalisk.com',
      'Content-Type': 'application/json',
      'X-Client-ID': xclientid.toString(),
      'X-Token': xtoken.toString(),
      'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
    },
    "createdAt": time,
    "env": 0,
    "host": "https://slugalisk.com",
    "id": '123',
    "siteId": siteid,
    "updatedAt": time,
    "verified": true
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

 /* GET auth credentials */

 app.get('/getAuthCredentials', (req, res)=>{
  authorizeRequest0(
    getAuthCredentials
  );
 res.end('receive complete');
});

function getAuthCredentials(xclientid, xtoken, cookie, time){
  var options = {
    url: 'https://slugalisk.com/api/v1/auth/credentials',
    method: 'GET',
    headers: {
      'origin': 'https://slugalisk.com',
      'Content-Type': 'application/json',
      'X-Client-ID': xclientid.toString(),
      'X-Token': xtoken.toString(),
      'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
    },
  };
  request(options, function(err, res, body) {
    if (res) {
      info = JSON.parse(body);
      console.log(info);
    }
    else{
      console.log(err);
    }
  });
}

 /* POST auth credentials */

 app.post('/postAuthCredentials', (req, res)=>{
  authorizeRequest2(
    req.body.email, 
    req.body.password, 
    postAuthCredentials,
  );
 res.end('receive complete');
});


 function postAuthCredentials(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
  var options = {
    url: 'https://slugalisk.com/api/v1/auth/credentials',
    method: 'POST',
    headers: {
      'origin': 'https://slugalisk.com',
      'Content-Type': 'application/json',
      'X-Client-ID': xclientid.toString(),
      'X-Token': xtoken.toString(),
      'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
    },
    "email": email,
    "password": password
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

  /* DELETE auth credentials */

  app.post('/deleteAuthCredentials', (req, res)=>{
    authorizeRequest1(
      req.body.id, 
      deleteAuthCredentials,
    );
   res.end('receive complete');
  });
  
  function deleteAuthCredentials(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/auth/credentials/'+parameter_1,
      method: 'DELETE',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
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
  

  /* POST auth credentials replacements*/

  app.post('/postAuthCredentialsReplacements', (req, res)=>{
    authorizeRequest2(
      req.body.email, 
      req.body.id, 
      postAuthCredentialsReplacements
    );
   res.end('receive complete');
  });
  
  
   function postAuthCredentialsReplacements(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
    var options = {
      url: 'https://slugalisk.com/api/v1//auth/credentials/'+parameter_2+'/replacements',
      method: 'POST',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      "current": {
        "email": parameter_1,
        "password": "string"
      },
      "replacement": {
        "email": parameter_1,
        "password": "string"
      },
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

  /* PUT auth credentials replacements*/

  app.post('/putAuthCredentialsReplacements', (req, res)=>{
    authorizeRequest3(
      req.body.email, 
      req.body.id, 
      req.body.code, 
      putAuthCredentialsReplacements
    );
   res.end('receive complete');
  });
  
  
   function putAuthCredentialsReplacements(xclientid, xtoken, cookie, time, email, credentialsId, code){
    var options = {
      url: 'https://slugalisk.com/api/v1//auth/credentials/'+credentialsId+'/replacements',
      method: 'PUT',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      "code": code,
      "credentials": {
        "email": email,
        "password": "string"
      }
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

  /* DELETE auth credentials replacements*/

  app.post('/deleteAuthCredentialsReplacements', (req, res)=>{
    authorizeRequest2(
      req.body.code, 
      req.body.id, 
      putAuthCredentialsReplacements
    );
   res.end('receive complete');
  });
  
  
   function deleteAuthCredentialsReplacements(xclientid, xtoken, cookie, time, code, credentialsId){
    var options = {
      url: 'https://slugalisk.com/api/v1//auth/credentials/'+credentialsId+'/replacements',
      method: 'DELETE',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      "code": code,
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
  

  /* GET people */

  app.get('/getPeople', (req, res)=>{
    authorizeRequest0(getPeople);
   res.end('receive complete');
  });
  
  function getPeople(xclientid, xtoken, cookie, time){
    var options = {
      url: 'https://slugalisk.com/api/v1/people',
      method: 'GET',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
    };
    request(options, function(err, res, body) {
      if (res) {
        info = JSON.parse(body);
        console.log(info);
      }
      else{
        console.log(err);
      }
    });
  }

  /* DELETE people */
  app.post('/deletePeople', (req, res)=>{
    authorizeRequest1(
      req.body.id, 
      deletePeople
    );
   res.end('receive complete');
  });
  
   function deletePeople(xclientid, xtoken, cookie, time, parameter_1){
     console.log(peopleid);
    var options = {
      url: 'https://slugalisk.com/api/v1/people/'+parameter_1,
      method: 'DELETE',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
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

   /*POST auth recovery */

   app.post('/postAuthRecovery', (req, res)=>{
    authorizeRequest1(req.body.email, postAuthRecovery);
   res.end('receive complete');
  });
  
  
   function postAuthRecovery(xclientid, xtoken, cookie, time, email){
    var options = {
      url: 'https://slugalisk.com/api/v1/auth/recovery',
      method: 'POST',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      "email": email,
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




   /* --- REDDIT --- */

   /* GET REDDIT */
   app.get('/getReddit', (req, res) => {
    request('https://slugalisk.com/api/v1/reddit/apps', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        info = JSON.parse(body);
         console.log(info);
      }
    });
  });

  /* POST REDDIT */
  app.post('/postReddit', (req, res)=>{
    authorizeRequest2(
      req.body.consumerKey, 
      req.body.consumerSecret, 
      postReddit
    );
   res.end('receive complete');
  });
  
  function postReddit(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
    var options = {
      url: 'https://slugalisk.com/api/v1/reddit/apps',
      method: 'POST',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      'consumerKey': parameter_1,
      'consumerSecret': parameter_2,
      'defaultToken': {
        'expiry': '2017-12-06T00:54:09.938Z',
        'refreshToken': 'string',
        'token': 'string',
        'tokenType': 'string'
      },
      'name': 'string'
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

   /* GET REDDIT APPID */
   app.post('/getRedditAppid', (req, res)=>{
    authorizeRequest1(
      req.body.appid, 
      getRedditAppid
    );
   res.end('receive complete');
  });
  
  function getRedditAppid(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/reddit/apps/'+parameter_1,
      method: 'GET',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
    };
    request(options, function(err, res, body) {
      if (res) {
        info = JSON.parse(body);
        console.log(info);
      }
      else{
        console.log(err);
      }
    });
  }

  /* DELETE REDDIT APP ID */
  app.post('/deleteRedditAppid', (req, res)=>{
    authorizeRequest1(
      req.body.appid, 
      deleteRedditAppid
    );
    res.end('receive complete');
  });
  
  function deleteRedditAppid(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/reddit/apps/'+parameter_1,
      method: 'DELETE',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
    };
    request(options, function(err, res, body) {
      if (res) {
        info = JSON.parse(body);
        console.log(info);
      }
      else{
        console.log(err);
      }
    });
  }
  
    /* POST REDDIT APPID OAUTH */
    app.post('/postRedditAppidOauth', (req, res)=>{
      authorizeRequest2(
        req.body.appid,
        postRedditAppidOauth
      );
     res.end('receive complete');
    });
    
    function postRedditAppidOauth(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/reddit/apps/'+parameter_1+'/oauth',
        method: 'POST',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

  /* GET REDDIT APPID TOKENS*/
  app.post('/getRedditAppidTokens', (req, res)=>{
    authorizeRequest1(
      req.body.appid, 
      getRedditAppidTokens
    );
   res.end('receive complete');
  });
  
  function getRedditAppidTokens(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/reddit/apps/'+parameter_1+'/tokens',
      method: 'GET',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
    };
    request(options, function(err, res, body) {
      if (res) {
        info = JSON.parse(body);
        console.log(info);
      }
      else{
        console.log(err);
      }
    });
  }

    /* POST REDDIT APPID TOKENS*/
    app.post('/postRedditAppidTokens', (req, res)=>{
      authorizeRequest1(
        req.body.appid, 
        postRedditAppidTokens
      );
     res.end('receive complete');
    });
    
    function postRedditAppidTokens(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/reddit/apps/'+parameter_1+'/tokens',
        method: 'GET',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
        "expiry": "2017-12-06T03:35:04.927Z",
        "refreshToken": "string",
        "token": "string",
        "tokenType": "string"
      };
      request(options, function(err, res, body) {
        if (res) {
          info = JSON.parse(body);
          console.log(info);
        }
        else{
          console.log(err);
        }
      });
    }

    /* GET REDDIT APPID TOKENID*/
    app.post('/getRedditAppidTokenid', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        req.body.tokenid,
        getRedditAppidTokenid
      );
     res.end('receive complete');
    });
    
    function getRedditAppidTokenid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/reddit/apps/'+parameter_1+'/tokens/'+parameter_2,
        method: 'GET',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
      };
      request(options, function(err, res, body) {
        if (res) {
          info = JSON.parse(body);
          console.log(info);
        }
        else{
          console.log(err);
        }
      });
    }

    /* DELETE REDDIT APPID TOKENID*/
    app.post('/deleteRedditAppidTokenid', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        req.body.tokenid,
        deleteRedditAppidTokenid
      );
      res.end('receive complete');
    });
    
    function deleteRedditAppidTokenid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/reddit/apps/'+parameter_1+'/tokens/'+parameter_2,
        method: 'DELETE',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
      };
      request(options, function(err, res, body) {
        if (res) {
          info = JSON.parse(body);
          console.log(info);
        }
        else{
          console.log(err);
        }
      });
    }

  /* GET REDDIT APPID WIDGETS*/
  app.post('/getRedditAppidWidgets', (req, res)=>{
    authorizeRequest1(
      req.body.appid, 
      getRedditAppidWidgets
    );
   res.end('receive complete');
  });
  
  function getRedditAppidWidgets(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/reddit/apps/'+parameter_1+'/widgets',
      method: 'GET',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
    };
    request(options, function(err, res, body) {
      if (res) {
        info = JSON.parse(body);
        console.log(info);
      }
      else{
        console.log(err);
      }
    });
  }

    /* POST REDDIT APPID WIDGETS*/
    app.post('/postRedditAppidWidgets', (req, res)=>{
      authorizeRequest1(
        req.body.appid, 
        postRedditAppidWidgets
      );
     res.end('receive complete');
    });
    
    function postRedditAppidWidgets(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/reddit/apps/'+parameter_1+'/widgets',
        method: 'POST',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
        "limit": 0,
        "subreddit": "string"
      };
      request(options, function(err, res, body) {
        if (res) {
          info = JSON.parse(body);
          console.log(info);
        }
        else{
          console.log(err);
        }
      });
    }

    /* GET REDDIT APPID WIDGETS WIDGETID*/
    app.post('/getRedditAppidWidgetid', (req, res)=>{
      authorizeRequest1(
        req.body.appid, 
        req.body.widgetid,
        getRedditAppidWidgetid
      );
      res.end('receive complete');
    });
    
    function getRedditAppidWidgetid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/reddit/apps/'+parameter_1+'/widgets/'+parameter_2,
        method: 'POST',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
      };
      request(options, function(err, res, body) {
        if (res) {
          info = JSON.parse(body);
          console.log(info);
        }
        else{
          console.log(err);
        }
      });
    }

    /* DELETE REDDIT APPID WIDGETS*/
    app.post('/deleteRedditAppidWidgets', (req, res)=>{
      authorizeRequest2(
        req.body.appid, 
        req.body.widgetid,
        deleteRedditAppidTokens,
      );
     res.end('receive complete');
    });
    
    function deleteRedditAppidWidgets(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/reddit/apps/'+parameter_1+'/widgets'+parameter_2,
        method: 'DELETE',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
      };
      request(options, function(err, res, body) {
        if (res) {
          info = JSON.parse(body);
          console.log(info);
        }
        else{
          console.log(err);
        }
      });
    }

    /* GET REDDIT APPID WIDGETID FEED*/
    app.post('/getRedditAppidWidgetidFeed', (req, res)=>{
      authorizeRequest2(
        req.body.appid, 
        req.body.widgetid,
        deleteRedditAppidTokens,
      );
      res.end('receive complete');
    });
    
    function deleteRedditAppidWidgets(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/reddit/apps/'+parameter_1+'/widgets'+parameter_2+'/feed',
        method: 'GET',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
      };
      request(options, function(err, res, body) {
        if (res) {
          info = JSON.parse(body);
          console.log(info);
        }
        else{
          console.log(err);
        }
      });
    }



    /* --- TWITCH --- */
    app.get('/getTwitch', (req, res) => {
      request('https://slugalisk.com/api/v1/twitch/apps', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          info = JSON.parse(body);
           console.log(info);
        }
      });
    });

    

    /* --- TWITTER --- */

    /* GET TWITTER */
    app.get('/getTwitter', (req, res) => {
      request('https://slugalisk.com/api/v1/twitter/apps', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          info = JSON.parse(body);
           console.log(info);
        }
      });
    });

    /* POST TWITTER */
    app.post('/postTwitter', (req, res)=>{
      authorizeRequest2(
        req.body.consumerKey, 
        req.body.consumerSecret,
        postTwitter
      );
     res.end('receive complete');
    });
    function postTwitter(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/twitter/apps',
        method: 'POST',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
          "consumerKey": parameter_1,
          "consumerSecret": parameter_2,
          "defaultToken": {
            "secret": "string",
            "token": "string"
          },
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

    /* GET TWITTER APPID */
    app.post('/getTwitterAppid', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        getTwitterAppid
      );
     res.end('receive complete');
    });
    function getTwitterappid(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1,
        method: 'GET',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

    /* DELETE TWITTER APPID */
    app.post('/deleteTwitterAppid', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        deleteTwitterAppid
      );
     res.end('receive complete');
    });
    function deleteTwitterAppid(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1,
        method: 'DELETE',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

     /* POST TWITTER APPID OAUTH */
    app.post('/postTwitterAppidOauth', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        postTwitterAppidOauth
      );
     res.end('receive complete');
    });
    function postTwitterAppidOauth(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1+'/oauth',
        method: 'POST',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

    /* GET TWITTER APPID TOKENS */
    app.post('/getTwitterAppidTokens', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        getTwitterAppidTokens
      );
     res.end('receive complete');
    });
    function getTwitterAppidTokens(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1+'/tokens',
        method: 'GET',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

    /* POST TWITTER APPID TOKENS */
    app.post('/postTwitterAppidTokens', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        postTwitterAppidTokens
      );
     res.end('receive complete');
    });
    function postTwitterAppidTokens(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1+'/tokens',
        method: 'GET',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

    /* GET TWITTER APPID TOKENS TOKENID */
    app.post('/getTwitterAppidTokensTokenid', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        req.body.tokenid,
        getTwitterAppidTokensTokenid
      );
     res.end('receive complete');
    });
    function getTwitterAppidTokensTokenid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1+'/tokens/'+parameter_2,
        method: 'GET',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

    /* PUT TWITTER APPID TOKENS TOKENID */
    app.post('/putTwitterAppidTokensTokenid', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        req.body.tokenid,
        putTwitterAppidTokensTokenid
      );
     res.end('receive complete');
    });
    function putTwitterAppidTokensTokenid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1+'/tokens/'+parameter_2,
        method: 'PUT',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

    /* DELETE TWITTER APPID TOKENS TOKENID */
    app.post('/deleteTwitterAppidTokensTokenid', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        req.body.tokenid,
        deleteTwitterAppidTokensTokenid
      );
     res.end('receive complete');
    });
    function deleteTwitterAppidTokensTokenid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1+'/tokens/'+parameter_2,
        method: 'DELETE',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

    /* GET TWITTER APPID WIDGETS */
    app.post('/getTwitterAppidWidgets', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        getTwitterAppidWidgets
      );
     res.end('receive complete');
    });
    function getTwitterAppidWidgets(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1+'/widgets',
        method: 'GET',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

    /* POST TWITTER APPID WIDGETS */
    app.post('/postTwitterAppidWidgets', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        postTwitterAppidWidgets,
      );
     res.end('receive complete');
    });
    function postTwitterAppidWidgets(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1+'/widgets',
        method: 'POST',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

  /* GET TWITTER APPID WIDGETS WIDGETID */
  app.post('/getTwitterAppidWidgetsWidgetid', (req, res)=>{
    authorizeRequest2(
      req.body.appid,
      req.body.widgetid,
      getTwitterAppidWidgetsWidgetid,
    );
   res.end('receive complete');
  });
  function getTwitterAppidWidgetsWidgetid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
    var options = {
      url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1+'/widgets/'+paremeter_2,
      method: 'GET',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
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

  /* PUT TWITTER APPID WIDGETS WIDGETID */
  app.post('/putTwitterAppidWidgetsWidgetid', (req, res)=>{
    authorizeRequest2(
      req.body.appid,
      req.body.widgetid,
      getTwitterAppidWidgetsWidgetid,
    );
   res.end('receive complete');
  });
  function putTwitterAppidWidgetsWidgetid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
    var options = {
      url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1+'/widgets/'+paremeter_2,
      method: 'PUT',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      "enableLinks": true,
      "enableMedia": true,
      "enableTruncation": true,
      "limit": 0,
      "linkHashTags": true,
      "linkMentions": true,
      "mediaSize": "thumb",
      "mentionsFormat": "SCREEN_NAME",
      "screenName": "string"
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

  /* DELETE TWITTER APPID WIDGETS WIDGETID */
  app.post('/deleteTwitterAppidWidgetsWidgetid', (req, res)=>{
    authorizeRequest2(
      req.body.appid,
      req.body.widgetid,
      deleteTwitterAppidWidgetsWidgetid,
    );
   res.end('receive complete');
  });
  function deleteTwitterAppidWidgetsWidgetid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
    var options = {
      url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1+'/widgets/'+paremeter_2,
      method: 'DELETE',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
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

  /* GET TWITTER APPID WIDGETS WIDGETID */
  app.post('/getTwitterAppidWidgetsWidgetidFeed', (req, res)=>{
    authorizeRequest2(
      req.body.appid,
      req.body.widgetid,
      getTwitterAppidWidgetsWidgetidFeed,
    );
   res.end('receive complete');
  });
  function getTwitterAppidWidgetsWidgetidFeed(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
    var options = {
      url: 'https://slugalisk.com/api/v1/twitter/apps/'+parameter_1+'/widgets/'+paremeter_2+'/feed',
      method: 'GET',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
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


  /* --- GOOGLE --- */

  /* GET GOOGLE APPS */
  app.get('/getGoogle', (req, res) => {
    request('https://slugalisk.com/api/v1/google/apps', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        info = JSON.parse(body);
         console.log(info);
      }
    });
  });

  /* POST GOOGLE APPS */
  app.post('/postGoogle', (req, res)=>{
    authorizeRequest2(
      req.body.key, 
      req.body.secret,
      postGoogle
    );
    res.end('receive complete');
  });
  function postGoogle(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
    var options = {
      url: 'https://slugalisk.com/api/v1/google/apps',
      method: 'POST',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      "clientKey": parameter_1,
      "clientSecret": parameter_2
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

  /* GET GOOGLE APPID */
  app.post('/getGoogleAppid', (req, res)=>{
    authorizeRequest1(
      req.body.appid,
      getGoogleAppid,
    );
    res.end('receive complete');
  });
  function getGoogleAppid(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/google/apps/'+parameter_1,
      method: 'GET',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
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

  /* PUT GOOGLE APPID */
  app.post('/putGoogleAppid', (req, res)=>{
    authorizeRequest1(
      req.body.appid,
      putGoogleAppid,
    );
    res.end('receive complete');
  });
  function putGoogleAppid(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/google/apps/'+parameter_1,
      method: 'PUT',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      "clientKey": "string",
      "clientSecret": "string",
      "defaultToken": {
        "expiry": "2017-12-08T01:14:03.839Z",
        "refreshToken": "string",
        "token": "string",
        "tokenType": "string"
      }
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

    /* DELETE GOOGLE APPID */
    app.post('/deleteGoogleAppid', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        deleteGoogleAppid,
      );
      res.end('receive complete');
    });
    function deleteGoogleAppid(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/google/apps/'+parameter_1,
        method: 'DELETE',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

    /* POST GOOGLE APPID OAUTH */
    app.post('/postGoogleAppidOauth', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        postGoogleAppidOauth,
      );
      res.end('receive complete');
    });
    function postGoogleAppidOauth(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/google/apps/'+parameter_1+'/oauth',
        method: 'POST',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

    /* GET GOOGLE APPID TOKENS */
    app.post('/getGoogleAppidTokens', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        getGoogleAppidTokens,
      );
      res.end('receive complete');
    });
    function getGoogleAppidTokens(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/google/apps/'+parameter_1+'/tokens',
        method: 'GET',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
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

    /* POST GOOGLE APPID TOKENS */
    app.post('/postGoogleAppidTokens', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        postGoogleAppidTokens,
      );
      res.end('receive complete');
    });
    function postGoogleAppidTokens(xclientid, xtoken, cookie, time, parameter_1){
      var options = {
        url: 'https://slugalisk.com/api/v1/google/apps/'+parameter_1+'/tokens',
        method: 'POST',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
        "expiry": "2017-12-08T03:05:04.588Z",
        "refreshToken": "string",
        "token": "string",
        "tokenType": "string"
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

  /* GET GOOGLE APPID TOKENID */
  app.post('/getGoogleAppidTokenid', (req, res)=>{
    authorizeRequest1(
      req.body.appid,
      req.body.tokenid,
      getGoogleAppidTokenid,
    );
    res.end('receive complete');
  });
  function getGoogleAppidTokenid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
    var options = {
      url: 'https://slugalisk.com/api/v1/google/apps/'+parameter_1+'/tokens/'+parameter_2,
      method: 'GET',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      "expiry": "2017-12-08T03:05:04.588Z",
      "refreshToken": "string",
      "token": "string",
      "tokenType": "string"
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

    /* PUT GOOGLE APPID TOKENID */
    app.post('/putGoogleAppidTokenid', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        req.body.tokenid,
        putGoogleAppidTokenid,
      );
      res.end('receive complete');
    });
    function putGoogleAppidTokenid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/google/apps/'+parameter_1+'/tokens/'+parameter_2,
        method: 'PUT',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
        "expiry": "2017-12-08T03:07:01.005Z",
        "refreshToken": "string",
        "token": "string",
        "tokenType": "string"
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

    /* DELETE GOOGLE APPID TOKENID */
    app.post('/deleteGoogleAppidTokenid', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        req.body.tokenid,
        deleteGoogleAppidTokenid,
      );
      res.end('receive complete');
    });
    function deleteGoogleAppidTokenid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/google/apps/'+parameter_1+'/tokens/'+parameter_2,
        method: 'DELETE',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
        "expiry": "2017-12-08T03:07:01.005Z",
        "refreshToken": "string",
        "token": "string",
        "tokenType": "string"
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


  /* --- DISCORD --- */

  /* GET DISCORD */
  app.get('/getDiscord', (req, res) => {
    request('https://slugalisk.com/api/v1/discord/apps', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        info = JSON.parse(body);
         console.log(info);
      }
    });
  });

  /* POST DISCORD APPS */
  app.post('/postDiscord', (req, res)=>{
    authorizeRequest2(
      req.body.clientKey, 
      req.body.clientSecret,
      postDiscord
    );
    res.end('receive complete');
  });
  function postDiscord(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
    var options = {
      url: 'https://slugalisk.com/api/v1/discord/apps',
      method: 'POST',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      "clientKey": parameter_1,
      "clientSecret": parameter_2
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

  /* GET DISCORD APPID */
  app.post('/getDiscordAppid', (req, res)=>{
    authorizeRequest1(
      req.body.appid,
      getDiscordAppid,
    );
    res.end('receive complete');
  });
  function getDiscordAppid(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/discord/apps/'+parameter_1,
      method: 'GET',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
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

  /* PUT DISCORD APPID */
  app.post('/putDiscordAppid', (req, res)=>{
    authorizeRequest1(
      req.body.appid,
      putDiscordAppid,
    );
    res.end('receive complete');
  });
  function putDiscordAppid(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/discord/apps/'+parameter_1,
      method: 'PUT',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      "clientKey": "string",
      "clientSecret": "string",
      "defaultToken": {
        "expiry": "2017-12-08T05:46:33.263Z",
        "refreshToken": "string",
        "token": "string",
        "tokenType": "string"
      }
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

  /* DELETE DISCORD APPID */
  app.post('/deleteDiscordAppid', (req, res)=>{
    authorizeRequest1(
      req.body.appid,
      deleteDiscordAppid,
    );
    res.end('receive complete');
  });
  function deleteDiscordAppid(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/discord/apps/'+parameter_1,
      method: 'DELETE',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
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

  /* POST DISCORD APPID OAUTH */
  app.post('/postDiscordAppidOauth', (req, res)=>{
    authorizeRequest1(
      req.body.appid,
      postDiscordAppidOauth,
    );
    res.end('receive complete');
  });
  function postDiscordAppidOauth(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/discord/apps/'+parameter_1+'/oauth',
      method: 'POST',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
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

  /* GET DISCORD APPID TOKENS */
  app.post('/getDiscordAppidTokens', (req, res)=>{
    authorizeRequest1(
      req.body.appid,
      getDiscordAppidTokens,
    );
    res.end('receive complete');
  });
  function getDiscordAppidTokens(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/discord/apps/'+parameter_1+'/tokens',
      method: 'GET',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
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

  /* POST DISCORD APPID TOKENS */
  app.post('/postDiscordAppidTokens', (req, res)=>{
    authorizeRequest1(
      req.body.appid,
      postDiscordAppidTokens,
    );
    res.end('receive complete');
  });
  function postDiscordAppidTokens(xclientid, xtoken, cookie, time, parameter_1){
    var options = {
      url: 'https://slugalisk.com/api/v1/discord/apps/'+parameter_1+'/tokens',
      method: 'POST',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      "expiry": "2017-12-08T03:05:04.588Z",
      "refreshToken": "string",
      "token": "string",
      "tokenType": "string"
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

  
  /* GET DISCORD APPID TOKENID */
  app.post('/getDiscordAppidTokenid', (req, res)=>{
    authorizeRequest1(
      req.body.appid,
      req.body.tokenid,
      getDiscordAppidTokenid,
    );
    res.end('receive complete');
  });
  function getDiscordAppidTokenid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
    var options = {
      url: 'https://slugalisk.com/api/v1/discord/apps/'+parameter_1+'/tokens/'+parameter_2,
      method: 'GET',
      headers: {
        'origin': 'https://slugalisk.com',
        'Content-Type': 'application/json',
        'X-Client-ID': xclientid.toString(),
        'X-Token': xtoken.toString(),
        'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
      },
      "expiry": "2017-12-08T03:05:04.588Z",
      "refreshToken": "string",
      "token": "string",
      "tokenType": "string"
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

    /* PUT DISCORD APPID TOKENID */
    app.post('/putDiscordAppidTokenid', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        req.body.tokenid,
        putDiscordAppidTokenid,
      );
      res.end('receive complete');
    });
    function putDiscordAppidTokenid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/discord/apps/'+parameter_1+'/tokens/'+parameter_2,
        method: 'PUT',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
        "expiry": "2017-12-08T03:07:01.005Z",
        "refreshToken": "string",
        "token": "string",
        "tokenType": "string"
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

    /* DELETE DISCORD APPID TOKENID */
    app.post('/deleteDiscordAppidTokenid', (req, res)=>{
      authorizeRequest1(
        req.body.appid,
        req.body.tokenid,
        deleteDiscordAppidTokenid,
      );
      res.end('receive complete');
    });
    function deleteDiscordAppidTokenid(xclientid, xtoken, cookie, time, parameter_1, parameter_2){
      var options = {
        url: 'https://slugalisk.com/api/v1/discord/apps/'+parameter_1+'/tokens/'+parameter_2,
        method: 'DELETE',
        headers: {
          'origin': 'https://slugalisk.com',
          'Content-Type': 'application/json',
          'X-Client-ID': xclientid.toString(),
          'X-Token': xtoken.toString(),
          'Cookie': cookie.toString().replace(' HttpOnly; Secure', ''),
        },
        "expiry": "2017-12-08T03:07:01.005Z",
        "refreshToken": "string",
        "token": "string",
        "tokenType": "string"
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

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
 
const port = process.env.PORT || 5000;
app.listen(port);
 
console.log(`server started`);