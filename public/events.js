//resource table
$(document).ready( function () {
    $('#table_id').DataTable();
  } );
//   $('#table_id').dataTable( {
//     "order": [[ 0, 'asc' ], [ 1, 'asc' ]]
// } );
//modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const trash = document.getElementsByClassName("fa-trash-alt");
const save = document.getElementsByClassName("fa-save");

Array.from(trash).forEach(function (element) {
  element.addEventListener("click", function (e) {
     const id = e.target.dataset.id
     console.log(id)
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
  element.addEventListener("click", function (e) {
    const id = e.target.dataset.id
    console.log(id)
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
