console.log('Its Alive');

var Twit = require('twit');
var express = require('express');
    app = express(),
require('dotenv').load();

//new twit object
var T = new Twit({
    consumer_key:         process.env.KEY,
    consumer_secret:      process.env.SECRET,
    access_token:         process.env.TOKEN,
    access_token_secret:  process.env.TOKEN_SECRET,
    //timeout_ms:           60*1000,   // optional HTTP request timeout to apply to all requests.
   // strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })

  //console.log(T);
  console.log(T.process.env.TOKEN_SECRET);



 //End of File 
console.log('Go to sleep');