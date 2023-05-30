let hp = 100;
let startButton = document.querySelector('.buttonStart');

let instructionsP = document.querySelector(".instructions");

startButton.addEventListener('click', function() {
  displayQuestions(data);
});

function displayText(data) {
const introText = document.createElement('p');
  introText.textContent = 'Welcome to the game! In this game, you will be faced with a series of choices that will affect your character\'s health and score. Your goal is to make it to the end of the game with as much health and score as possible. Click the "START" button below to begin!';
  document.body.appendChild(introText);
}

// Fetch the data from db.json
fetch("db.json")
  .then(response => response.json())
  .then(data => {
    // You can add your functions here to avoid having to use fetch every time you want to get data from db.json
    displayText(data)
  })


// Display the text at the start of the game


// Display questions and the player's choices
function displayQuestions(data) {

}

// Increase or decrease the player's hp depending on choices
function hpChange(data) {

}
displayText(data)