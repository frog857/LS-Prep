let rlSync = require('readline-sync');

let firstName = rlSync.question("What is your first name? ")
let lastName = rlSync.question("Nice. And your last name? ")

console.log(`Hello, ${firstName} ${lastName}!`)
