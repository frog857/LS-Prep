// #1

/* 
This code will log 1 to the console. Since the variable bar was declared
in the global scope, it doesn't matter that it was reassigned within
the local scope of the function foo()

EDIT: after looking at solution, my explanation isn't quite right. If bar is reassigned 
within a function scope, it can be changed. However, in the example, bar
was reinitialized in the function scope, which won't affect the 
initialized variable bar in global scope.
*/

// # 2

let rlSync = require('readline-sync')

let firstName = rlSync.question("What's your first name?")
let lastName = rlSync.question("What's your last name?");

function greet(first, last) {
  return `Hello, ${first} ${last}!`
}

console.log(greet(firstName, lastName));

//#3 See multiply.js

// #4

/*
It doesn't log anything. Return will end the function, and line 4
will not be executed by JS
*/

// #5

/*
It doesn't log anything as well. Return does not log to the console.
*/

/*Function Declaration v*/
function /*function name ->*/multiplyNumbers(num1, num2, num3/*Params*/) { /*Function Body*/
  let result = num1 * num2 * num3;
  return result/*<- return value*/;
}

let product = /*Function invocation ->*/multiplyNumbers(2, 3, 4/*Function arguments*/);

/*Variables:
- mutiplyNumbers
- num1, num2, and num3
- result
- product
*/

//#7 - it will log Hello and undefined, since the qux paramater was not given
// and argument. params default to undefined

// #8 we will log the first two args to the console. The third arg will be
// ignored, as js ignores extra args beyond specified params
