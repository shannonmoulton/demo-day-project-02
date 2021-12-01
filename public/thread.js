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
