//Hacking Story Frameworks, Fall 2016
//Paula Ceballos & Zoe Bachman
//Project: Gender Diversity in Tech




console.log("the bot is starting");

// Using the Twit node package
// https://github.com/ttezel/twit
var Twit = require('twit');
//and tracery package
//https://github.com/galaxykate/tracery/
//https://github.com/v21/tracery
var tracery = require("tracery-grammar");

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


    //access spells JSON file
    var charms = require('./spells.json');
    var emotions = require('./emotions.json');
    var thesaurus = require('./synonyms.json');
    var tech = require('./tech.json');
    var CS = require('./computerScience.json');

    //create empty arrays to store information
    var incantations = [];
    var effect = [];
    var feels = [];
    var synonyms = [];
    var techWords = [];
    var CSwords = [];

    // console.log(CS.computer_sciences[26]);

    //run through a for loop of the JSON file and store the information into 
    //separate arrays to be accessed later
    for(var i = 0; i < charms.spells.length; i++) {
      var currentIncant = charms.spells[i].incantation;
      var currentEffect = charms.spells[i].effect;
      incantations.push(currentIncant);
      effect.push(currentEffect);
    }

    for(var i = 0; i < emotions.length; i++){
      var currentEmotion = emotions[i];
      feels.push(currentEmotion);
    }

    for(var i = 0; i < thesaurus.length; i++){
      synonyms.push(thesaurus[i]);
    }

    for(var i = 0; i <tech.length; i++){
      techWords.push(tech[i]);
    }

    // for(var i = 0; i < CS.length; i++){
    //   CSwords.push(CS.computer_sciences[i]);
    // }

    // console.log(CSwords);



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
// T.get('https://api.twitter.com/1.1/search/tweets.json', params, gotData);



//---------------POST--------------

// Start once
tweetIt();

// Once every N milliseconds  (right now 5 minutes)
// setInterval(tweetIt, 60*5*1000);
setInterval(tweetIt, 30000);

// Here is the bot!
function tweetIt() {

  var ranInc = incantations[Math.floor(Math.random()*incantations.length)];
  var ranEffect = effect[Math.floor(Math.random()*effect.length)];
  var ranFeel = feels[Math.floor(Math.random()*feels.length)];
  var ranSyn = synonyms[Math.floor(Math.random()*synonyms.length)];

  // console.log(grammar.flatten('#sentence#'));
  // console.log("A " + ranInc + " "+ ranSyn + " for feeling " + ranFeel + " because it " + ranEffect)

  // This is a random number bot
  // var tweet = 'Here\'s a random number between 0 and 100: ' + Math.floor(Math.random()*100);

  // Post that tweet!
  // T.post('statuses/update', { status: tweet }, tweeted);
  // console.log("I am now tweeting: " + tweet);

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





























//--------------TRACERY-------------

var grammar = tracery.createGrammar({
  'animal': ['panda','fox','capybara','iguana'],
  'emotion': ['sad','happy','angry','jealous'],
  'origin':['I am #emotion.a# #animal#.'],
  'origin':['A #charm/spell/curse# for #emotion.a# #internet word#'],
  
});

var data = {
  "sentence":['I feel #emotion'],
  "emotion":["affection", "amusement", "anger", "annoyance", "anxiety", "boredom", "calm", "contempt", "content", "courage", "delight", "despair", "disappointment", "disgust", "doubt", "elation", "embarrassment", "empathy", "envy", "excitement", "fear", "friendliness", "frustration", "guilt", "happiness", "helplessness", "hope", "hurt", "interest", "irritation", "joy", "love", "pleasure", "politeness", "powerlessness", "pride", "relaxed", "relieved", "sadness",  "satisfaction", "serene", "shame", "shock", "stress", "surprise", "tension", "trust", "worry"],

  "incantation": incantations,
  "effects": effect
}

//--------------TRACERY-------------