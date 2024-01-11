// Call this function when you want to start the intro text animation
window.onload = typeIntroText;

/**
 * The typeIntroText function plays a typing effect on the introduction text
 * It gives the player an entertaining feel at the game launch
 * @returns nothing
 */
function typeIntroText() {
    const introElement = document.getElementById('details');
    const fullText = introElement.innerText;
    let currentText = '';
    let index = 0;

    introElement.innerText = ''; // Clear the existing text

    /**
     * Function to add one character at a time
     * @returns nothing
     */
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

// Initialize global variables to track wins, losses, tries, and maximum number of tries.
let wins = 0;
let losses = 0;
let tries = 0;
let maxTries;
let lastPlayerDecision;

// Statistics object to track various game metrics.
let stats = {
    cooperations: 0,
    defections: 0,
    wins: 0,
    losses: 0,
    mutualBenefit: 0,
    mutualLoss: 0
};

const message = document.getElementById("errorNumber");
const ctx = document.getElementById('gameStatsChart').getContext('2d');

// Variable to hold the Chart.js chart instance.
let statsChart;

// Event listener for the 'Start Game' button.
document.getElementById('startGame').addEventListener('click', startGame);

// Event listener for the 'Enter' button.
document.getElementById('maxTries').addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        startGame();
    }
});

// Attach event listeners to each choice (Cooperate/Defect) in the game grid.
document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', handleChoice);
});

/**
 * The startGame function initializes the game settings and the chart.
 * @param nothing
 * @returns nothing
 */
function startGame() {

    // Deselect the choice buttons
    

    message.innerText = "";
    // Destroy the existing chart if it exists
    if (statsChart) {
      statsChart.destroy();
    }
    // Initialize the chart to visualize game statistics.
    setupChart();

    maxTries = parseInt(document.getElementById('maxTries').value);
    if (!maxTries || maxTries <= 0) {
        message.innerText = "Please enter a valid number of tries."
        return;
    }

    // Resetting game counters and statistics.
    tries = 0;
    wins = 0;
    losses = 0;
    for (let key in stats) {
        stats[key] = 0;
    }

     // Updating the UI with the initial values.
     document.getElementById('wins').textContent = wins;
     document.getElementById('losses').textContent = losses;
     document.getElementById('gameGrid').style.display = 'grid';
     document.getElementById('scoreboard').style.display = 'block';
     document.getElementById('strategySelection').style.display = 'block';
 
     // Hide the intro and show the chart container.
     document.getElementById('intro').style.display = 'none';
     document.getElementById('chartContainer').style.display = 'block';
     
     // Hide the tries input box and show tries tracker.
     document.getElementById('tries1').style.display = 'none';
     document.getElementById('tries2').style.display = 'block';

     
}

/**
 * The setupChart function will set up the Chart.js chart.
 * @param nothing
 * @returns nothing
 */
function setupChart() {
    statsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cooperations', 'Defections', 'Wins', 'Losses', 'Mutual Benefit', 'Mutual Loss'],
            datasets: [{
                label: 'Game Statistics',
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

/**
 * The updateChart function will update the chart with the latest game statistics.
 * @param nothing
 * @returns nothing
 */
function updateChart() {
    statsChart.data.datasets[0].data = [stats.cooperations, stats.defections, stats.wins, stats.losses, stats.mutualBenefit, stats.mutualLoss];
    statsChart.update();
}

/**
 * The getOpponentDecision function determines the computer's decision based on the selected opponent strategy.
 * @param {nothing}
 * @returns nothing
 */
function getOpponentDecision() {
    const strategy = document.getElementById('opponentStrategy').value;
    switch (strategy) {
        case 'alwaysCooperate':
            return 'Cooperate';
        case 'alwaysDefect':
            return 'Defect';
        case 'titForTat':
            return lastPlayerDecision || 'Cooperate';
        default: // Random
            return Math.random() > 0.5 ? 'Cooperate' : 'Defect';
    }
}

/**
 * The handleChoice function handles the player's choice and determines the game's outcome.
 * @param {*} event 
 * @returns nothing
 */
function handleChoice(event) {
    if (tries >= maxTries) {
        alert('Game over! Please restart to play again.');
        return;
    }

    const userDecision = event.target.id.includes('Cooperate') ? 'Cooperate' : 'Defect';
    lastPlayerDecision = userDecision;
    const opponentDecision = getOpponentDecision();

    // Update the grid selections and game scores.
    updateGridSelections(userDecision, opponentDecision);
    updateScores(userDecision, opponentDecision);

    // Increment the tries counter.
    tries++;
    document.getElementById('tries').textContent = tries;
}

/**
 * The updateGridSelections function updates the colors of the grid based on players decisions.
 * @param {*} userDecision 
 * @param {*} opponentDecision 
 * @returns nothing
 */
function updateGridSelections(userDecision, opponentDecision) {
    document.querySelectorAll('.choice').forEach(choice => {
        choice.classList.remove('selected');
    });

    // Highlight the selected choices.
    document.getElementById(`player${userDecision}`).classList.add('selected');
    document.getElementById(`computer${opponentDecision}`).classList.add('selected');
}

/**
 * The updateScores function updates the game scores and statistics.
 * @param {*} userDecision 
 * @param {*} opponentDecision 
 * @returns nothing
 */
function updateScores(userDecision, opponentDecision) {
    let result;

    // Determine the outcome and update win/loss counters.
    if (userDecision === 'Cooperate' && opponentDecision === 'Defect') {
        result = 'In your last play you COOPERATED while your opponent DEFECTED. You get 3 years in prison!';
        losses++;
        stats.losses++;
    } else if (userDecision === 'Defect' && opponentDecision === 'Cooperate') {
        result = 'In your last play you DEFECTED while your opponent COOPERATED. You go free!';
        wins++;
        stats.wins++;
    } else if (userDecision === 'Cooperate' && opponentDecision === 'Cooperate') {
        result = 'In your last play you both COOPERATED. You both get 1 year in prison.';
        stats.mutualBenefit++;
    } else if (userDecision === 'Defect' && opponentDecision === 'Defect') {
        result = 'In your last play you both DEFECTED. You both get 2 years in prison.';
        stats.mutualLoss++;
    }

    // Update cooperation and defection counts.
    if (userDecision === 'Cooperate') stats.cooperations++;
    else stats.defections++;

    // Update the UI with the current scores and the result of the last round.
    document.getElementById('result').innerText = result;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;

    // Update the chart with the new statistics.
    updateChart();
}