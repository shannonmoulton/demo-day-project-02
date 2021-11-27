//resource table
$(document).ready( function () {
    $('#table_id').DataTable();
  } );

  // save resource
  const save = document.getElementsByClassName("fa-save");

  Array.from(save).forEach(function (element) {
    element.addEventListener("click", function (e) {
         const save = this.parentNode.childNodes[0]
         const id = e.target.dataset.id
         console.log(id)

      // fetch("/savedResources", {
      //   method: 'post',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     'id': id
          
      //   })
      // }).then(function (response) {
      //   window.location.reload();
      // });
    });
  });