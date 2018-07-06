console.log('Its Alive');

var Twit = require('twit');
console.log('twit has been required');

var config = require('./config');
console.log(config);

var T = new Twit(config);
console.log(T);


// var express = require('express');
//    app = express(),
// require('dotenv').load();
// console.log('express has started');

 //End of File 
console.log('Go to sleep');