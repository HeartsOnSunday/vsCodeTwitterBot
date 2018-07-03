console.log('Its Alive');

var Twit = require('twit');

//new twit object
var T = new Twit({
    consumer_key:         'iR3gK5exixXFf3ihRLJLZxSkZ',
    consumer_secret:      'YMpJJcjXFtj3U9XnZ2e6JI3vJLW1ZDIrUXyw2lduY4OwzJbfhS',
    access_token:         '...',
    access_token_secret:  '...',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })