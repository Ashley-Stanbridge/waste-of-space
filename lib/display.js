// var $ = require('jquery')
// import { getTweets } from './lib.js'


var tweets = ["I'm a fuckidy duckidy astranuttiify", "WOOOO, I am a fancy Astrofuck"]


function printTweets(tweets) {
  tweets.forEach(function(tweet){
    console.log(tweet)
      $('#twitterFeed').append(
        '<div class="tweet">' + tweet + '</div>'
  })
}



// function printGPS(positions) {
//   positions.forEach(function(gps){
//     console.log(gps)
//       // $('#twitterFeed').append(
//       //   '<div class="tweet">' + tweet + '</div>'
//   })
// }

// printTweets(tweets)


