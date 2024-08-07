// Array of radial gradient colors
const gradients = [
    'radial-gradient(circle, #ff7e5f, #feb47b)', // Gradient 1
    'radial-gradient(circle, #6a11cb, #2575fc)', // Gradient 2
    'radial-gradient(circle, #ff9a9e, #fad0c4)', // Gradient 3
    'radial-gradient(circle, #ffafbd, #ffc3a0)'  // Gradient 4
];

function changeGradient() {
    // Get a random gradient from the array
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    document.body.style.background = randomGradient;
}

// Change gradient every 6 minutes (360000 milliseconds)
setInterval(changeGradient, 360000);

// Initial gradient change
changeGradient();
