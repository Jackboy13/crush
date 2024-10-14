const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
let noClicks = 0; // Track how many times the user clicks "No"

// Redirect to a love song page when "Yes" is clicked
yesButton.addEventListener('click', () => {
    window.location.href = "music.html"; // Redirects to music.html
});

// Move the "No" button randomly when hovered
function moveButton() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Random position within the window boundaries
    const randomX = Math.floor(Math.random() * (windowWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - noButton.offsetHeight));

    noButton.style.position = 'absolute'; // Ensure it can move
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Move the "No" button randomly when the mouse hovers over it
noButton.addEventListener('mouseover', moveButton);

// Handle "No" button clicks
noButton.addEventListener('click', () => {
    noClicks += 1;

    if (noClicks >= 3) {
        // After 3 clicks, reset the noClicks counter and show a persuasive message
        noClicks = 0; // Reset count
        moveButton(); // Move to a random position

        // Show a persuasive message
        const container = document.querySelector('.container');
        const message = document.createElement('p');
        message.textContent = "Come on, are you sure? You know you want to say YES! ❤️";
        message.style.color = '#ff3366';
        message.style.fontSize = '1rem'; // Adjusted font size for mobile
        container.appendChild(message);

        // Remove the mouseover event to stop moving temporarily
        noButton.removeEventListener('mouseover', moveButton); 
    } else {
        // Optional: You can add an alert to track clicks
        alert(`You've clicked "No" ${noClicks} time(s).`);
    }
});
