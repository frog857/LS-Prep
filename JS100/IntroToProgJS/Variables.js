// #1

let name = "Victor"
console.log(`Good Morning, ${name}`)
console.log(`Good Afternoon, ${name}`)
console.log(`Good Evening, ${name}`)

// #2
let age = 20;
let ten = 10;
let twenty = 20;
let thirty = 30;
let fourty = 40;

console.log(`You are ${age}. In ${ten} years, you will be ${age + ten}`)
console.log(`You are ${age}. In ${twenty} years, you will be ${age + twenty}`)
console.log(`You are ${age}. In ${thirty} years, you will be ${age + thirty}`)
console.log(`You are ${age}. In ${fourty} years, you will be ${age + fourty}`)

// I used variables to represent numbers, as the sample output's syntatic coloring seemed to indictate that

// #3

/*
We should get a error, as foo will not be defined. Foo was declared using the let keyword, which
only has block scope. Since the console log is outside of that block of code, it will not have access
to that label.
 */

 // #4

 /* 
 The first three lines will run successfully, with the desired output.
 There will be an error when trying to reassign NAME to the string 'Joe',
 as you cannot reassign the value of NAME, since it was declared as a constant.
 */

 // #5

 /* 
 This program should log bar to the console. We declared foo with the let
 keyword, and the value of 'bar' in the global scope. We then declare in 
 a block scope foo with the let keyword, and a different value, qux. However,
 since we console log the expression foo in the global scope, we expect
 to see the value bar.
 */

// # 6

/* 
I'm thinking this program won't produce an error. If I remember correctly, 
const still has block scope. Only a var declaration has global scope. Despite 
the reassignation of the same FOO using const, these variables are not able to 
interacti with eachother due to scope difference.
*/

// #7


