var geocoder;
var map;
var userLocation = document.getElementById('address').value;

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

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
// Chatbox
function openForm(userId) {
  document.getElementById("myForm").style.display = "block";
  console.log(userId)
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function showAllUsers(userName, userZipcode, userImg, userId) {
  geocoder.geocode({ 'address': userZipcode }, function (results, status) {
    console.log(userId)
    if (status == 'OK') {
      const userInfo =
        '<div class="chip">' +
        `<img src="images/uploads/${userImg}" width="96" height="96">` + userName +
        `<i class="fas fa-comment-dots" id="msg" data-id="${userId}" ></i>` +
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
  geocoder.geocode({ 'address': eventAddress }, function (results, status) {
    if (status == 'OK') {
      const eventInfo =
        '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">' + eventName + '</h1>' +
        '<div id="bodyContent">' +
        "<p>" + eventAddress + "</p>" +
        "<a href=" + eventWebsite + ">" + "Website" + "</a>" +
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

//Delete savedEvents
Array.from(trash).forEach(function (element) {
  element.addEventListener("click", function (e) {
    const id = e.target.dataset.id
    console.log(id)
    fetch("/deleteSavedEvents", {
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
//Delete messages
Array.from(trash).forEach(function (element) {
  element.addEventListener("click", function (e) {
    const id = e.target.dataset.id
    console.log(id)
    fetch("/deleteMessage", {
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
//Edit Account Details

const edit = document.getElementsByClassName('fa-edit');

Array.from(edit).forEach(function (element) {
  element.addEventListener('click', function (e) {

    // const username = this.parentNode.childNodes[5].innerText
    // const email = this.parentNode.childNodes[10].innerText
    // const location = this.parentNode.childNodes[15].innerText
    // const id = e.target.dataset.id
    // console.log(name)

    // fetch('editUsername', {
    //   method: 'put',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     'id': id
    //   })
    // })
    //   .then(response => {
    //     if (response.ok) return response.json()
    //   })
    //   .then(data => {
    //     console.log(data)
    //     window.location.reload(true)
    //   })
  });
});
ready(function () {
  var msg = document.getElementById('msg')
  if (msg) {
    msg.addEventListener('click', function () { console.log(msg) })
  }

})

document.body.addEventListener('click', function (event) {
  if (event.target.id == 'msg') {
    const id = event.target.dataset.id
    const formElement = document.getElementById('formAction')
    formElement.setAttribute('action', `/messages/${id}`)
    document.getElementById("myForm").style.display = "block";


  }
})