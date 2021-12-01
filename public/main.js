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
var userLocation = document.getElementById('address').value;

function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(39.952583, -75.165222);
  var mapOptions = {
    zoom: 10,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function showCurrentUser(userLocation) {
  geocoder.geocode({ 'address': userLocation }, function (results, status) {
    if (status == 'OK') {
      const userInfo =
        '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading"> Home</h1>' +
        '<div id="bodyContent">' +
        "<p> Your current location</p>" +

        "</div>" +
        "</div>";
      const infowindow = new google.maps.InfoWindow({
        content: userInfo,
      });
      var home = new google.maps.Marker({
        position: results[0].geometry.location,
        map: map,
        icon: 'http://maps.google.com/mapfiles/kml/pal3/icon31.png'
      });
      home.addListener("click", () => {
        infowindow.open({
          anchor: home,
          map,
          shouldFocus: false,
        });
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function showAllUsers(userName, userZipcode) {
  geocoder.geocode({ 'address': userZipcode }, function (results, status) {
    if (status == 'OK') {
      const userInfo =
        '<div class="chip">' +
        '<img src="https://www.w3schools.com/howto/img_avatar2.png" width="96" height="96">' + userName +
        '<i class="fas fa-comment-dots" onclick="openForm()"></i>' +
        '</div>';
      const infowindow = new google.maps.InfoWindow({
        content: userInfo,
      });
      var allUsers = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        icon: 'http://maps.google.com/mapfiles/kml/shapes/man.png'
      });
      allUsers.addListener("click", () => {
        infowindow.open({
          anchor: allUsers,
          map,
          shouldFocus: false,
        });
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function showEvent(eventName, eventAddress, eventWebsite) {
  console.log(eventName, eventAddress)
  geocoder.geocode({ 'address': eventAddress }, function (results, status) {
    if (status == 'OK') {
      const eventInfo =
        '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">' + eventName + '</h1>' +
        '<div id="bodyContent">' +
        "<p>" + eventAddress + "</p>" +
        "<p>" + eventWebsite + "</p>" +
        "</div>" +
        "</div>";
      const infowindow = new google.maps.InfoWindow({
        content: eventInfo,
      });
      var event = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        icon: 'http://maps.google.com/mapfiles/kml/paddle/ylw-stars.png'
      });
      event.addListener("click", () => {
        infowindow.open({
          anchor: event,
          map,
          shouldFocus: false,
        });
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

// Delete savedResources
const trash = document.getElementsByClassName("fa-trash-alt");

Array.from(trash).forEach(function (element) {
  element.addEventListener("click", function (e) {
    const id = e.target.dataset.id
    console.log(id)
    fetch("/deleteSavedResources", {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'id': id

      })
    }).then(function (response) {
      window.location.reload();
    });
  });
});


