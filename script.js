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

const x = function () {
  console.log(23);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number! 🚫';
  }
});

// addEventListener sits and waits for condition (click) to happen,
// when it does happen the function detailed in part 2 of the expression
// is called and executed.

// !guess (no guess) defaults to 0 which is a falsy value and thus "true"
// for the purpose of the if function due to the ! negation.
// This covers the function for "no input" situations.
