// script.js
let likeCount = 0;

// Function to update the like count when the button is clicked
function like() {
    likeCount++;
    document.getElementById("likeCount").textContent = likeCount;
}

// Add a click event listener to the like button
document.getElementById("likeButton").addEventListener("click", like);
