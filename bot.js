//Hacking Story Frameworks, Fall 2016
//Paula Ceballos & Zoe Bachman
//Project: Gender Diversity in Tech



console.log("the bot is starting");

//this is an import statement
var Twit = require('twit');
//with twit you can make 1) a get request - search, 2) post - tweeting and 3) stream - continuous (socket) connection


//add your individual tokens
var T = new Twit({
  consumer_key:         '3xAnVtjPpc40rPrZ7t2jR9F68',
  consumer_secret:      'nNJdSsOEuFPQtzzsA6vUQGojG3K4OG1yrfj1GAxK4b9oU4r2lw',
  access_token:         '785247083288748032-hQwygZ6phijLuoWyP0EkxvNW2lbz6jm',
  access_token_secret:  '9S57EskFrClRWo1lSOowOc2XKQfDWCiT0OL9RIh3PqL8J'
  // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//---------GET-----------
var params = {
	q: 'feminism',
	// count: 5
}

function gotData (err, data, response){
  console.log('inside gotData function, retrieving data');
  console.log(data)

  var getTweets = data.statuses;
  var boo = data.statuses;

  console.log (data.statuses);

  // for (var i = 0; i < boo.length; i++){
  // 	console.log(getTweets[i].text);
  // }
}

//  search twitter for all getTweets containing the word 'banana' since July 11, 2011
T.get('search/getTweets', params, gotData);
//-------------GET----------


//----------POST----------

//

// var postTweet = { 
//   //these are the tweets you will post 
//   status: 'Ada Lovebot to the rescue' 
// }

// function tweetedPostCallback (err, data, response) {
//   if (err){
//     console.log('Something went wrong')
//   } else {
//   console.log("it worked!")
//   console.log(data)
//   }
// };

// T.post('statuses/update', postTweet, tweetedPostCallback);

//----------POST----------















//baby steps

//step 1: search for hasthtags with a certain hashtag (ie: feminist)
//step 2: retweet
//
//step 3: search for specific CEOs tweets
//step 4: rewrite them using "female language"
//step 5: tweet out



