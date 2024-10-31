let firstName = prompt("What's your first name?")
let lastName = prompt("What's your last name?");

function greet(first, last) {
  return `Hello, ${first} ${last}!`
}

console.log(greet(firstName, lastName));