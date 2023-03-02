'use strict';
// const bookings = [];

// const createBooking = function (flightNum, numPax = 1, price = 199 * numPax) {
//   const booking = {
//     flightNum,
//     numPax,
//     price,
//   };
//   console.log(booking);
//   bookings.push('booking');
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);
// //----------------
// const flight = 'LH234';
// const db = [234890974];
// const pax = {
//   name: 'John Doe',
//   passport: db[0],
// };

// const checkIn = function (flightNum, pax) {
//   flightNum = 'LH999';
//   pax.name = 'Mr.' + pax.name;

//   if (pax.passport === db[0]) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, pax);
// console.log(flight);
// console.log(pax);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };
// newPassport(pax);
// checkIn(flight, pax);
// //----------------------
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
//     );
//   },
// };
// lufthansa.book(239, 'Joe Doe');
// lufthansa.book(635, 'A J');

//----------------
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    //register answers
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 3, 3] });

// const inputA = document.createElement('input');
// inputA.type = 'number';
// inputA.className = 'answer';

// const text = `What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++`;

// const registerNewAnswer = function () {
//   const pollScope = prompt(text);
//   console.log(pollScope);
//   if (pollScope >= 0 && pollScope <= 3) {
//     // poll.answers.fill(pollScope);
//     console.log(poll.answers);
//   } else {
//     console.log('enter a number less then 4');
//   }
// };
// registerNewAnswer();
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
