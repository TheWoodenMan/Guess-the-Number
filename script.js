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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

// Event listener and button control.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input.
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! 🚫';

    // When player wins.
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number! 🎊';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
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
