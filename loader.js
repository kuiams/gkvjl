// Select elements
var loader = document.querySelector('.loader');
const main = document.querySelector(".main");
var ki = document.querySelector('#h3');
var scroller = document.querySelector(".scroller");

// Initialize count
var count = 0;

// Interval to simulate loading progress
var i = setInterval(function () {
    // Update count and progress
    if (count < 100) {
        count++;
        ki.textContent = count;
        scroller.style.width = count + "%";
    }
    
    // Stop interval at 100
    if (count === 100) {
        clearInterval(i);
        
        // Hide loader and show main content
        loader.style.display = "none";
        main.style.display = "block";
    }
}, 60);
