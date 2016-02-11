var request = require('superagent')


// function moveISS () {
//     request.get('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
//         var lat = data['iss_position']['latitude'];
//         var lon = data['iss_position']['longitude'];
//         console.log(lat, lon)
//     });
//     setTimeout(moveISS, 5000); 
// }

// moveISS()

function getLatLong () {
     request
     .get('http://api.open-notify.org/iss-now.json')
     .end(function(err, res){
        var lat = res.body.iss_position.latitude
        var lon = res.body.iss_position.longitude
        console.log(lat, lon)
   })
}

getLatLong()

// request
//      .get('http://api.open-notify.org/iss-now.json?callback=?')
//      .end(function(err, res){
//         console.log(res)
//     })

// function moveISS () {
//     $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
//         var lat = data['iss_position']['latitude'];
//         var lon = data['iss_position']['longitude'];

//         // See leaflet docs for setting up icons and map layers
//         // The update to the map is done here:
//         iss.setLatLng([lat, lon]);
//         isscirc.setLatLng([lat, lon]);
//         map.panTo([lat, lon], animate=true);
//     });
//     setTimeout(moveISS, 5000); 
// }

// function testISS () {
// $.ajax({
//   dataType: "json",
//   url: 'http://api.open-notify.org/iss-now.json?callback=?',
//   data: data,
//   success: success
// });
// }