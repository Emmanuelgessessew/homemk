
function toggleContent(button) {
  const moreContent = button.previousElementSibling; 
  if (moreContent.style.display === "none" || moreContent.style.display === "") {
    moreContent.style.display = "block";
    button.innerText = "Show Less";
  } else {
    moreContent.style.display = "none";
    button.innerText = "Show More";
  }
}



