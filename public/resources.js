//resource table
$(document).ready( function () {
    $('#table_id').DataTable();
  } );

  const save = document.getElementsByClassName("fa-save");
  let savedItems = { resource: [], event: []};

  Array.from(save).forEach(function (element) {
    element.addEventListener("click", function () {
      //  let id = this.parentNode.parentNode.childNodes[0].value
       let id = document.querySelector("#table_id > tbody:nth-child(2) > tr > td.sorting_1").value
       console.log(id)
       
      //  savedItems[id].push()
      //  console.log(savedItems)
      // fetch("/savedItems", {
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