# Building a Role Playing Game

## In script.js
The code in `script.js` defines three functions that will be used to display the text at the start of the game, display the questions and the player's choices, and increase or decrease the player's hp depending on their choices. It also defines a hp variable that will be used to keep track of the player's health points.

Below are instructions for building out each function. Use these as a guide.

### Starting the game
In the index.html file, you'll want to add an event listener to the start button that triggers the displayQuestions function. Here's an example of how to do this:

const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', function() {
  displayQuestions(data);
});


### displayText
This function will be used to display the text at the start of the game. You can add code to this function to select and update the HTML elements that you want to use to display the text. For example, you can select the h1 and img elements and update their text and src attributes, respectively. Below is an example of how you can do this:

function displayText(data) {
  const introText = document.createElement('p');
  introText.textContent = 'Welcome to the game! In this game, you will be faced with a series of choices that will affect your character\'s health and score. Your goal is to make it to the end of the game with as much health and score as possible. Click the "START" button below to begin!';
  document.body.appendChild(introText);

  const startButton = document.createElement('button');
  startButton.classList.add('start-button');
  startButton.textContent = 'START';
  document.body.appendChild(startButton);
}

### displayQuestions
This function will be used to display the questions and the player's choices. You can add code to this function to select and update the HTML elements that you want to use to display the questions and the choices. For example, you can select the h1 element and update its text to display the question, and you can build buttons to select and update their text and `onclick` attributes to display the choices. Below is an example of how you can do this:

function displayQuestions(data) {
  // Get the current question from the data array
  const currentQuestion = data[currentQuestionIndex];

  // Display the question text
  const questionText = currentQuestion.question;
  const questionEl = document.querySelector('.question');
  questionEl.textContent = questionText;

  // Display the question image
  const questionImage = currentQuestion.picture;
  const questionImageEl = document.querySelector('.question-image');
  questionImageEl.src = questionImage;

  // Display the choices
  const choices = currentQuestion.choices;
  const choicesEl = document.querySelector('.choices');
  choicesEl.innerHTML = '';
  choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.classList.add('choice');
    button.setAttribute('data-choice-index', index);
    button.textContent = choice;
    choicesEl.appendChild(button);
  });
}

### hpChange
This function will be used to increase or decrease the player's HP depending on their choices. You can add code to this function to update the hp variable based on the choice that the player made. For example, you can use an if-else statement to check the value of the hp property of the choice that the player made, and update the hp variable accordingly. You can also use an if-else statement to check if the player's HP has reached 0, and end the game if it has. Below is an example of how you can do this:

function hpChange(data, choiceIndex) {
  // Get the current question and choice from the data array
  const currentQuestion = data[currentQuestionIndex];
  const choiceImpact = currentQuestion.impact[choiceIndex];

  // Update the player's hp
  hp += choiceImpact;

  // Update the player's hp display
  const hpEl = document.querySelector('.hp');
  hpEl.textContent = `HP: ${hp}`;

  // Check if the game is over
  if (hp <= 0) {
    gameOver();
  }
}

### Ending the game
You'll want to add a function to end the game when the player's HP reaches 0. This function could simply display a message to the player that the game is over and refresh the page. Here's an example of how to do this:

function gameOver() {
  alert('Game over! Your HP has reached 0.');
  location.reload();
}

## Building out your db.json file
Currently the `db.json` file has some example choices, but you should fill it in based on your own choices and what you'd like to happen in your own game. Here is a quick explainer of what each key-value pair currently does:
- `picture`: This property is used to store the URL of an image that corresponds to the question.
- `question`: This property is used to store the text of the question that will be displayed to the player.
- `choices`: This property is used to store an array of choices that the player can make in response to the question.
- `impact`: This property is used to store an array of numerical values that correspond to each choice. These values represent the impact that each choice will have on the player's health or score. For example, if the player chooses a choice with an impact of -5, their health or score will decrease by 5.
- `nextQuestion`: This property is used to store an array of numerical values that correspond to the index of the next question that will be displayed based on the player's choice. For example, if the player chooses the first choice in an array of choices, the next question displayed will be the one with an index equal to the first value in the nextQuestion array.

Remember, you'll need to create multiple objects inside the db.json file in order to have a more robust game, but use the above template as a guide! 

### db.json alternative
As an alternative to building out your data in `db.json`, you can also add your data to `script.js`, storing it in a variable (named `data` for example). You'd write it the same way. For example:
let data = [
  {
    "picture":"https://example.com/image1.jpg",
    "question":"You are standing at a fork in the road. Which path do you choose?",
    "choices":["Take the path to the left", "Take the path to the right"],
    "impact":[2, -1],
    "nextQuestion":[1, 2]
  },
]

However, the more data you add, the more difficult the code is to read through, which is why getting the data from `db.json` using the `fetch` method is considered a better practice.

## Styling the game
You'll want to add some CSS to style the game and make it look nice. In `style.css`, you'll find some basic styles that you can use as a starting point.

## Adding more features
There are many ways to expand on this game. Here are a few ideas:
- Add different types of choices, such as ones that give the player more information or ones that require a skill check
- Add a scoring system that gives the player points for making certain choices or completing certain challenges
- Add a save feature that allows the player to continue the game where they left off
- Add branching paths that allow the player to make choices that affect which questions they see next