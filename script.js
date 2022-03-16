'use strict';

// Functions

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const randNumber = function (number) {
  Math.trunc(Math.random() * 20) + 1;
};

// This is the secret number and score, both are state variables
// and are part of the score, as opposed to being in the DOM

let secretNumber = Math.trunc(Math.random() * 20) + 1;
displayMessage('Guess the Number?! 🧮');

let score = 20;
let highScore = 0;

// Reset event listener and button control.

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Guess the Number?! 🧮');
});

// Event listener and button control.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input.
  if (!guess) {
    displayMessage('No number! 🚫');

    // When the guess is not between 1 and 20.
  } else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'Must be between 1 & 20 ❌';
  }

  // When player wins.
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number! 🎊');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When Guess is Wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'Too Low! ⬇️' : 'Too High! ⬆️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose the Game! 💀');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// End
