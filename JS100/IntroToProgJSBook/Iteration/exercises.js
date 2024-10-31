//#1 see age.js

//#2 see factorial.js

//#3
/*
It looks at first glance the break statement will trigger when counter is incremented
past 2. However, the break statement is in a block of code within the while block. My
guess is this will not break the while block, only the if block?

EDIT: did not notice the === vs = detail. Took that for granted. It's useful to
note that assignation expressions will evaluate truthy.
*/

// #4

/*
I'm thinking it will produce an error, as the syntax for the for loop is invalid.

EDIT: did not realize all 3 components of a for loop optional. It is useful to note
that while the console.log(i += 1) 'feels' superficial, the expression inside the
parens is still being evaluated, and THEN passed into the console.log method.
Therefore the variable i is reassigned in the scope of our loop, and thus valid to
use for our conditional check
*/

//#5

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

//console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

//#6

function factorial(num) {
  // base case: num is 1, return 1
  return num === 1 ? 1 : num * factorial(num-1)
  // recursive case: num * factorial(num - 1)?
}

console.log(factorial(5))
console.log(factorial(1))
console.log(factorial(6))


//#7

