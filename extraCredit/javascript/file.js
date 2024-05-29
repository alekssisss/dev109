function foundItem(itemName) {
    var item = document.getElementById(itemName);
    if (item) {
        // Mark the item as found
        item.style.textDecoration = "line-through";
        // Optionally, you can hide the item
        // item.style.display = "none";
    }
}

// Function to reload the game
function replay() {
    location.reload();
}

// Adding event listeners for each item in the list
var items = document.querySelectorAll(".items");
items.forEach(function(item) {
    item.addEventListener("click", function() {
        foundItem(item.id);
    });
});
