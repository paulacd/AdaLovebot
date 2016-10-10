console.log("the bot is starting");

//this is an import statement
var Twit = require('twit');
//with twit you can make 1) a get request - search, 2) post - tweeting and 3) stream - continuous (socket) connection


//add your individual tokens
var T = new Twit({
  consumer_key:         'Lsb2QYXQRoQtFiXjDbsp5aN0v',
  consumer_secret:      'tZgaebclIC435Zrsuj17ZnpRi35Pqg5n1iQSm2ARvBipNVm2Gs',
  access_token:         '785247083288748032-hQwygZ6phijLuoWyP0EkxvNW2lbz6jm',
  access_token_secret:  '9S57EskFrClRWo1lSOowOc2XKQfDWCiT0OL9RIh3PqL8J',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//---------GET-----------
var params = {
	q: 'rainbow',
	count: 5
}

function gotData (err, data, response){
  console.log(data)

  var tweets = data.statuses;

  for (var i = 0; i < tweets.length; i++){
  	console.log(tweets[i].text);
  }
}

//  search twitter for all tweets containing the word 'banana' since July 11, 2011
T.get('search/tweets', params, gotData);
//-------------GET----------


//----------POST----------

//  tweet 'hello world!'
//
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})
//----------POST----------






