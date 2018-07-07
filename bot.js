console.log('Its Alive');

var Twit = require('twit');
console.log('twit has been required');

var config = require('./config');
console.log(config);

var T = new Twit(config);
console.log(T);

//ACTIONS
//get() search by #, location or users
//post() Tweet!!!
//steam() streaming with the twitter api and assign certain events
    //if someone mentions you, you can follow back.
var params = {
    q: 'cybersecurity',
    count: 5,
    lang: 'en'
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++){
        console.log(i + " : " + tweets[i].text);
    }
}


// var express = require('express');
//    app = express(),
// require('dotenv').load();
// console.log('express has started');

 //End of File 
console.log('Go to sleep');