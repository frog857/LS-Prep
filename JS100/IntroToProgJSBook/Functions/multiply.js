/*
let result;
let num1;
let num2;

function multiply() {
  let rlSync = require('readline-sync')
  num1 = Number(rlSync.question("Type a number"))
  num2 = Number(rlSync.question("Type another number"))
  result = num1 * num2;
}

multiply()

console.log(`${num1} multiplied by ${num2} = ${result}`)
*/

// Rewritten using better function grouping:

function multiply(num1, num2) {
  return num1 * num2
}

function getNum() {
  let rlSync = require('readline-sync')
  let input = rlSync.question("Type a numba: ")
  if (isNaN(input)) {
    console.log("That is not a number, try again\n")
    //getNum();
  } else {
    return input
  }
}

let num1 = getNum()
let num2 = getNum()

console.log(`${num1} multiplied by ${num2} = ${multiply(num1, num2)}`)
