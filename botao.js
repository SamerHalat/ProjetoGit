document.addEventListener("DOMContentLoaded", function() {
    // Create a new button element
    var button = document.createElement("button");
    button.innerHTML = "Click Me";

    // Add an event listener to the button
    button.addEventListener("click", function() {
        alert("Button was clicked!");
    });

    // Append the button to the body
    document.body.appendChild(button);
});