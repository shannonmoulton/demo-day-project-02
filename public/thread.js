const trash = document.getElementsByClassName("fa-trash-alt");

Array.from(trash).forEach(function (element) {
    element.addEventListener("click", function (e) {
        const id = e.target.dataset.id
        console.log(id)
        fetch("/deleteComment", {
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


