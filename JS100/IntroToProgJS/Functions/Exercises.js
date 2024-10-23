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

let firstName = prompt("What's your first name?")
let lastName = prompt("What's your last name?");

function greet(first, last) {
  return `Hello, ${first} ${last}!`
}

console.log(greet(firstName, lastName));