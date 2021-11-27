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
  var latlng = new google.maps.LatLng(-34.397, 150.644);
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

const trash = document.getElementsByClassName("fa-trash-alt");
const save = document.getElementsByClassName("fa-save");




//delete event
Array.from(trash).forEach(function (element) {
  element.addEventListener("click", function () {
     let id = this.parentNode.parentNode.childNodes[1].value
     console.log(this.parentNode.parentNode.childNodes)
    fetch("/delete", {
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

//save items
Array.from(save).forEach(function (element) {
  element.addEventListener("click", function () {
     let id = this.parentNode.parentNode.childNodes[17].value
    fetch("/savedItems", {
      method: 'post',
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

//modal
// Get the modal
var modal = document.getElementById("modalModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//resource table
$(document).ready( function () {
  $('#table_id').DataTable();
} );
