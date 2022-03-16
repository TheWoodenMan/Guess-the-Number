# starter

a simple numbers game project from The Complete Javascript Course '22 by Jonas Schmedtman jonas.io

the HTML/CSS files were pre-written.
The idea of this course is to code the javascript part of the site
and learn how to connect that to the HTML/CSS front end.
aka DOM (Document Object Model) Manipulation.

// querySelector aims at id (#) and class (.) components of the
// HTML/CSS. In this case it's a paragraph (p)
// textContent selects the contents of that paragraph.
// When there are multiple .dot operators, they
// execute from left to right.

// Notes - document.querySelector refers to an element in the html doc. (class or id)
// .textcontent refers to the text value of that element. .value refers to the number value.
// Dont forget to include the dot .

// <-- Author Notes -->

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

// DRY - Don't Repeat Yourself
// The entire event listener is enclosed with () brackets inluding all curly brackets.
// Look out or this if there are updates.
