//Hacking Story Frameworks, Fall 2016
//Paula Ceballos & Zoe Bachman
//Project: Gender Diversity in Tech




console.log("the bot is starting");

// Using the Twit node package
// https://github.com/ttezel/twit
var Twit = require('twit');

// Pulling all my twitter account info from another file
// var config = require('./config.js');


// Making a Twit object for connection to the API
// var T = new Twit(config);
var T = new Twit({
  consumer_key:         '3xAnVtjPpc40rPrZ7t2jR9F68',
  consumer_secret:      'nNJdSsOEuFPQtzzsA6vUQGojG3K4OG1yrfj1GAxK4b9oU4r2lw',
  access_token:         '785247083288748032-hQwygZ6phijLuoWyP0EkxvNW2lbz6jm',
  access_token_secret:  '9S57EskFrClRWo1lSOowOc2XKQfDWCiT0OL9RIh3PqL8J'
});

// Start once
tweeter();

// Once every N milliseconds  (right now 5 minutes)
setInterval(tweeter, 60*5*1000);

// Here is the bot!
function tweeter() {

  // This is a random number bot
  var tweet = 'Here\'s a random number between 0 and 100: ' + Math.floor(Math.random()*100);

  // Post that tweet!
  T.post('statuses/update', { status: tweet }, tweeted);

  // Callback for when the tweet is sent
  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
      //console.log(response);
    }
  };

}


//based on twitter bot examples from 
//Dan Shiffman's class Programming A to Z
//http://shiffman.net/a2z/