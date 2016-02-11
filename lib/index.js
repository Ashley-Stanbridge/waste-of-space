var request = require('superagent')
var Twitter = require('twitter')
var dotenv = require('dotenv')
var $ = require('jQuery')
// load environment variables

dotenv.load()

var client = new Twitter({
  consumer_key: process.env.consumerKey,
  consumer_secret: process.env.consumerSecret,
  access_token_key: process.env.accessToken,
  access_token_secret: process.env.accessTokenSecret,
});

function getLatLong () {
     request
     .get('http://api.open-notify.org/iss-now.json')
     .end(function(err, res){
        var lat = res.body.iss_position.latitude
        var lon = res.body.iss_position.longitude
        $('#issLocation').append(lat, lon);
        console.log(lat, lon)
   })
}

getLatLong()


  client.get('search/tweets', {q: 'StationCDRKelly'}, function(error, tweets, response){
    for (i=0; i<tweets.statuses.length; i++) {
        $('#twitterFeed').append(JSON.stringify(tweets.statuses[i].text))
    console.log(JSON.stringify(tweets.statuses[i].text))
}
});



// function getLatLong () {
//      request
//      .get('http://api.open-notify.org/astros.json')
//      .end(function(err, res){
//         var lat = res.body.people.latitude
//         var lon = res.body.iss_position.longitude
//         console.log(lat, lon)
//    })
// }

// getLatLong()
