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

// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
 var trash = document.getElementsByClassName("fa-trash-alt");

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
// Array.from(thumbDown).forEach(function (element) {
//   element.addEventListener("click", function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText;
//     const msg = this.parentNode.parentNode.childNodes[3].innerText;
//     const thumbUp = parseFloat(
//       this.parentNode.parentNode.childNodes[5].innerText
//     );
//     fetch("thumbDown", {
//       method: "put",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: name,
//         msg: msg,
//         thumbUp: thumbUp,
//         // 'thumbDown':thumbDown,
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
