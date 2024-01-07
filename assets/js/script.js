// Call this function when you want to start the intro text animation
window.onload = typeIntroText;

/**
 * This function plays a typing effect on the introduction text
 * and gives the player an entertaining feel at the game launch
 */

function typeIntroText() {
    const introElement = document.getElementById('details');
    const fullText = introElement.innerText;
    let currentText = '';
    let index = 0;

    introElement.innerText = ''; // Clear the existing text

    // Function to add one character at a time
    function addCharacter() {
        currentText += fullText.charAt(index);
        introElement.innerText = currentText;
        index++;

        // If the full text hasn't been displayed, call the function again after a short delay
        if (index < fullText.length) {
            setTimeout(addCharacter, 30); // Adjust the delay to control typing speed
        }
    }

    // Start the typing effect
    addCharacter();
}