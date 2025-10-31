const screenElement = document.getElementById('screen');
const startButton = document.getElementById('startButton');

// Add an event listener to the start button
startButton.addEventListener('click', () => {
    // Perform actions when the start button is clicked
    screenElement.textContent = 'Game Started!'; // Change screen content
    startButton.style.display = 'none'; // Hide the start button
});

// Example of initial screen setup (optional)
window.addEventListener('load', () => {
    console.log('Page fully loaded!');
    // Any setup that needs to happen after the page is fully loaded
});