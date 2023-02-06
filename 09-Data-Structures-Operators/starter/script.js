'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//1. Split the string:

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [status, origin, destination, time] = flight.split(';');
  const output = `${
    status.startsWith('_Delayed') ? '🚫' : ''
  }${status.replaceAll('_', ' ')} ${getCode(destination)} ${getCode(
    origin
  )} ${time.replace(':', 'h')}`;
  console.log(output);
}

//------------
for (let i = 0; i <= 5; i++) {
  console.log('🌐'.repeat(i + 1));
}
for (let i = 6; i <= 6 && i >= 1; i--) {
  console.log('🌐'.repeat(i));
}
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
//Coding challenge #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [new Set(gameEvents.values())];
// const events = gameEvents.values();
console.log(events);
// console.log(gameEvents.keys());
gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);

const time = [...gameEvents.keys()].pop();

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes.`
);

for (const [min, event] of gameEvents) {
  // if (min <= 45) {
  //   console.log(`[FIRST HALF]: ${min} ${event}.`);
  // } else if (min > 45) {
  //   console.log(`[SECOND HALF]: ${min} ${event}.`);
  // }

  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`${half}HALF: ${min} ${event}.`);
}
//---------------------'
const announceent = 'Lorem ljljj jkjji door 34. Okj jhlj jkj door 34!';
// console.log(announceent.replaceAll('door', 'gate'));

//regex
console.log(announceent.replace(/door/g, 'gate'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard('43580208750832705'));
console.log(maskCreditCard('2983579823'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// const changeToCamelCase = function changeToCamelCase(operand) {
//   const res = operand.split('_');
//   console.log(`string length ${operand.length}`);
//   // const spaceCount = 40 - operand.length;
//   // console.log(`spac count${spaceCount}`);
//   const capitalFirst = res[0];
//   const capitalSecond = res[1][0].toUpperCase();
//   const toLowerPart = res[1].slice(1).toLowerCase();
//   const camelC = capitalFirst + capitalSecond + toLowerPart;

//   console.log(camelC.padEnd(40, '*'));
//   console.log('------------------------------');
// };
// changeToCamelCase('underscore_case');
// changeToCamelCase('first_name');
// changeToCamelCase('Some_Variable');
// changeToCamelCase('calculate_AGE');
// changeToCamelCase('delayed_departure');
