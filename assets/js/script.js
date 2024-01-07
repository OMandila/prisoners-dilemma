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

/**
 * The startGame function initializes the game settings and the chart.
 * @param nothing
 * @returns nothing
 */
function startGame() {
    maxTries = parseInt(document.getElementById('maxTries').value);
    if (!maxTries || maxTries <= 0) {
        alert('Please enter a valid number of tries.');
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

     // Initialize the chart to visualize game statistics.
     setupChart();
}

// Attach event listeners to each choice (Cooperate/Defect) in the game grid.
document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', handleChoice);
});

/**
 * The setupChart function will set up the Chart.js chart.
 * @param nothing
 * @returns nothing
 */
function setupChart() {
    const ctx = document.getElementById('gameStatsChart').getContext('2d');
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
