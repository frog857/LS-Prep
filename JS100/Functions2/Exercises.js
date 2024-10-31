// Greet 1
function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world! // should log: Hello, world!

// Greet 2

function greet(greeting = "Hello", recipient = "world") {
  console.log(greeting + ', ' + recipient + '!');
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

// Greet 3

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet3() {
  return (greeting() + ', ' + recipient() + '!')
}

console.log(greet3())

function calculateBMI(height, weight) {
  return Math.round((weight / ((height/100)**2))*100)/100
}

console.log(calculateBMI(180, 80))