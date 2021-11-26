// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.036 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }



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


// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
const trash = document.getElementsByClassName("fa-trash-alt");
const save = document.getElementsByClassName("fa-save");


// Array.from(thumbUp).forEach(function (element) {
//   element.addEventListener("click", function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText;
//     const msg = this.parentNode.parentNode.childNodes[3].innerText;
//     const thumbUp = parseFloat(
//       this.parentNode.parentNode.childNodes[5].innerText
//     );
//     fetch("messages", {
//       method: "put",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: name,
//         msg: msg,
//         thumbUp: thumbUp,
//         thumbDown: thumbDown,
//       }),
//     })
//       .then((response) => {
//         if (response.ok) return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         window.location.reload(true);
//       });
//   });
// });

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
Array.from(save).forEach(function (element) {
  element.addEventListener("click", function () {
     let id = this.parentNode.parentNode.childNodes[17].value
    fetch("/savedItems", {
      method: 'put',
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


//resource table
$(document).ready( function () {
  $('#table_id').DataTable();
} );
