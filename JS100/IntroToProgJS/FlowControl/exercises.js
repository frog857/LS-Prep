// #1 - no programming

// #2 #3

function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    if (num % 2 === 0) {
      console.log('even')
    } else {
      console.log('odd')
    }
  } else {
    console.log('Your input was not a number.')
  }
  
}

//# 4 We won't log Product1, but we will log the rest of the
// outputs, because control will fall through beginning at the
// first switch case that is true. We need to add breaks.

//#5
/*
if foo() {
  return 'bar'
  } else {
  return qux()
  }
*/

//#6
 
/*
It will log 'Not Empty'.
Empty array's evaluate to truthy in javascript. In the code, it looks like
this is not what the programmer expected. 
*/

//#7

function longToCaps(string) {
  // input, string. output, either an uppercased string or the string itself

  // check if the string is shorter than 10 chars,
    // if so, return it
    // else, return the string in upper case
  return string.length >=10 ? string.toUpperCase() : string;
}

console.log(longToCaps('jerry'))
console.log(longToCaps('theveryjerrinator'))

function numberRange(num) {
  if (num > 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`)
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`)
  } else if (num > 100) {
    console.log(`${num} is greater than 100`)
  } else {
    console.log('Dat number out of range')
  }
}
/*
numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
*/

//#9 #10 no code
// false, true, 3, false, 3, 3, undefined, null




