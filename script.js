//your JS code here. If required.
window.onload = function() {
    var element = document.getElementById("level");
    var domLevel = 0;

    // Traverse through parent elements until reaching the root HTML element
    while (element.parentElement) {
        domLevel++;
        element = element.parentElement;
    }

    // Display the DOM level using alert
    alert("The level of the element is: " + domLevel);
};
