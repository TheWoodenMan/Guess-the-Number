'use strict';
/*
// querySelector aims at id (#) and class (.) components of the
// HTML/CSS. In this case it's a paragraph (p)
// textContent selects the contents of that paragraph.
// When there are multiple .dot operators, they
// execute from left to right.

console.log(document.querySelector('.message').textContent);
document;
document.querySelector('.message').textContent = '🥳 Correct Number! 🎊';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

// Notes - document.querySelector refers to an element in the html doc. (class or id)
// .textcontent refers to the text value of that element. .value refers to the number value.
// Dont forget to include the dot .
*/

// This is the secret number and score, both are state variables
// and are part of the score, as opposed to being in the DOM

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.message').textContent = 'Guess the Number?! 🧮';

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
  document.querySelector('.message').textContent = 'Guess the Number?! 🧮';
});

// Event listener and button control.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input.
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! 🚫';

    // When the guess is not between 1 and 20.
  } else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'Must be between 1 & 20 ❌';
  }

  // When player wins.
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number! 🎊';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score > 1) {
    // When guess is too high.
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too High! ⬆️';
      score--;
      document.querySelector('.score').textContent = score;

      // When guess is too low.
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too Low! ⬇️';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You Lose the Game! 💀';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// addEventListener sits and waits for condition (click) to happen,
// when it does happen the function detailed in part 2 of the expression
// is called and executed.

// !guess (no guess) defaults to 0 which is a falsy value and thus "true"
// for the purpose of the if function due to the ! negation.
// This covers the function for "no input" situations.

// Always check typos or case sensitive first when debugging
// You'll save a bunch of time and trouble.

// Key-points for changing css from javascript
// affect style.backgroundColor (for example)
// two words needs to be camel case not hyphenated.
// Needs to be a string, e.g. 'body'

// Challenge - Implement a game reset function.
// 1. Select the 'again' class and attach a click event handler.✅
// 2. in the function, restore the initial values of 'score' and 'number'✅
// 3. Restore the initial conditions of the message, number, score and guess input field. ✅
// 4. also restore the original background colour (#222) and number width. ✅

// <---Challenge Debug notes --->
// Make sure class/id tags ./#
// Double check brackets/curly are all open/close.
// Changing a const is forbidden, needed to change to let.
// 'guess' is only defined in the first event handler so we need to
// directly affect the text content rather than just change the variable which isn't possible.
// updating the 'score' variable doesn't automatically update the textcontent of score.
// textcontent and value are not the same and setting textcontent to null or '' when its actually
// value will do nothing. Value is for form contents, textcontent is for other html elements.
