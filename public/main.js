// function initMap() {
//   // The location of userLocation
//   const userLocation = { lat: -25.344, lng: 131.036 };
//   // The map, centered at userLocation
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at userLocation
//   const marker = new google.maps.Marker({
//     position: userLocation,
//     map: map,
//   });
// }


var geocoder;
var map;
function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(39.952583, -75.165222);
  var mapOptions = {
    zoom: 10,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


// Create the script tag, set the appropriate attributes
// var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBsV4es_wQi7dahHqQ&callback=initMap';
// script.async = true;

// Attach your callback function to the `window` object
// window.initMap = function() {
  // JS API is loaded and available
// };

// Append the 'script' element to 'head'
// document.head.appendChild(script);


// individual thread comments
document.querySelector('.viewAll').addEventListener('click',viewAll);

function viewAll() {
  const commentList = document.querySelector(".comment-list");
  if (commentList.style.display === "none") {
    commentList.style.display = "block";
  } 
  else {
    commentList.style.display = "none";
  }
  
}



