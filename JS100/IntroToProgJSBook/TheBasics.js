// The Basics 

// #1
let firstName = "Zack";
let lastName = "Brashear";
let fullName = firstName + " " + lastName;

// #2
let number = 4396;
let ones = (number % 10);

number = (number - ones) / 10;
let tens = (number % 10);

number = (number - tens) / 10;
let hundreds = (number % 10);

let thousands = (number - hundreds) / 10;

// #3
/*
string
boolean
number
number
undefined
object
*/

// #4
/*
"This code logs the string '510' instead of the number 510 because 
of Javascript coersion. Whenever using the + operator with one of the
 operands as a string, javascript will convert the other operand to a string as well
*/


// #5
console.log(Number('5') + 10);

// #6

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)

// #7

/*
No error will occur, javscript will return undefined. 
*/

// #8

const names = ["asta", "butterscotch", "pudding", "neptune", "darwin"];

// #9

const pets = {
  asta: "dog",
  butterscotch: "cat",
  pudding: "cat",
  neptune: "fish",
  darwin: "lizard",
}

// #10

// This should evaluate to false, as case matters when evaluating strings.

// #11

// This should evaluate to 3, as parseInt() will stop when running into a 
// non-numeric character, such as "."

// #12

/*
"12" < "9" will evaluate to true. When comparing strings, javascript will  only compare the first 
character in the string. Since (1 < 9) evaluates to true, this expression will as well.
*/
