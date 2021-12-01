//resource table
// $(document).ready( function () {
//     $('#example').DataTable();
//   } );
$(document).ready(function () {
  $('#table').DataTable({
    "paging": true,
    "ordering": true,
    "info": false,
    stateSave: true
  });
});
// save resource
const save = document.getElementsByClassName("fa-save");
const currentUserId = document.getElementById("currentUserId").innerText

Array.from(save).forEach(function (element) {
  element.addEventListener("click", function () {
    const save = this.parentNode.childNodes[0]
    const id = this.dataset.id
    console.log(id)
    fetch("savedResources", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'id': id,

      })
    }).then(function (response) {
      window.location.reload();
    });
  });
});
console.log('anything haha!')