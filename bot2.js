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

//------------------GET-------------

//working hashtags: cyberfeminism, femtech, womenintech, ladyboss
var params = {
  // q: '#cyberfeminism',
  q: '#femtech,#cyberfeminism',
  //q: ['#femtech','#cyberfeminism'],
  // lang: en,
  count: 5
}

function gotData (err, data, response){
  console.log('inside gotData function, retrieving data');
  // console.log(data);
  // console.log(response)


  var getTweets = data.statuses;
  // var boo = data.statuses;

  // console.log (data.statuses);

  for (var i = 0; i < getTweets.length; i++){
   console.log(getTweets[i].text);
  }
}

//  search twitter for all getTweets containing the params data
// T.get('search/getTweets', params, gotData);
// T.get('/1.1/search/getTweets', params, gotData);
T.get('https://api.twitter.com/1.1/search/tweets.json', params, gotData);
// /1.1/search/getTweets.json?q=feminism'


//---------------POST--------------

// Start once
tweeter();

// Once every N milliseconds  (right now 5 minutes)
setInterval(tweeter, 60*5*1000);

// Here is the bot!
function tweeter() {

  // This is a random number bot
  var tweet = 'Here\'s a random number between 0 and 100: ' + Math.floor(Math.random()*100);

  // Post that tweet!
  // T.post('statuses/update', { status: tweet }, tweeted);
  console.log("I am now tweeting: " + tweet);

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

//-----------------------POST---------------


//based on twitter bot examples from 
//Dan Shiffman's class Programming A to Z
//http://shiffman.net/a2z/