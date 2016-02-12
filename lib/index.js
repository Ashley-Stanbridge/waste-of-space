var request = require('superagent')
var Twitter = require('twitter')
var dotenv = require('dotenv')
var $ = require('jQuery')
// load environment variables

//authentication stuff

dotenv.load()

var client = new Twitter({
  consumer_key: process.env.consumerKey,
  consumer_secret: process.env.consumerSecret,
  access_token_key: process.env.accessToken,
  access_token_secret: process.env.accessTokenSecret,
});

//what latitude and longitude am I coming to?

function getLatLong (callback) {
     request
     .get('http://api.open-notify.org/iss-now.json')
     .end(function(err, res){
        var lat = res.body.iss_position.latitude
        var lon = res.body.iss_position.longitude
        // $('#issLocation').append(lat, lon);
        // console.log(lat, lon)
        callback([lat, lon])
   })
}

getLatLong()


//astrotwitter stuff

var astroTwitter = {
    'Scott Kelly':  'StationCDRKelly',
    'Chris Hadfield':  'Cmdr_Hadfield',
    'Timothy Kopra': 'astro_tim',
    'Timothy Peake': 'astro_timpeake'
}


function getAstros (callback) {
    var activeTwitters = []
    var finalTweets = []

     request
         .get('http://api.open-notify.org/astros.json')
         .end(function(err, res) {
             for (var i=0; i<res.body.people.length; i++) {
                activeTwitters.push(res.body.people[i].name)
             }

             for (var j=0; j<activeTwitters.length; j++) {
                var currentAstro = activeTwitters[j]
                if (currentAstro in astroTwitter) {
                      client.get('statuses/user_timeline', {screen_name: astroTwitter[currentAstro]}, function(error, tweets, response) {
                            finalTweets.push(tweets[0].text)
                            // console.log(activeTwitters, finalTweets)
                            if (finalTweets.length === 3) {
                                callback(finalTweets)

                            }      
                      })
                }
            }
        })
}








module.exports = {

    getAstros: getAstros,
    getLatLong: getLatLong
}





