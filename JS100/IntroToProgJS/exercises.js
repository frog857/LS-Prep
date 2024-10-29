// #1

// you can access the name of the person by typing person.name
// or, if using a variable, person[variableToName]

// #2

// all except undefined and true, which are reserved keywords.
// EDIT: I was incorrect. All values are acceptable to initiate(?)
// keys, but they will all be coerced to strings. Interesting!

// #3

let myArray = {
  length: 3,
  0: 'firstEl',
  1: 'secondEl',
  2: 'thirdEl',
}

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// #4

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj)
let upperKeys = objKeys.map(el => el.toUpperCase())
let myArray2 = [];
for (let key in obj) {
  myArray2.push(key.toUpperCase())
}

// console.log(upperKeys)
// console.log(myArray2)
// console.log(obj)

// #5

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

//console.log(myObj.__proto__)

// # 6

//primitives: "foo", false, undefined EDIT: and 3.1415
//objects: the arr, the function, theobj
//neither: others? EDIT: foo is an "identifier" (a referencer?), which doesn't
// have a value, but points to a value?

// #7

myObj['qux'] = 3;

/*
Snippet 1 will output 3 lines to the console, including the props of the prototype obj
as well as the child object's properties. Object.keys will return all keys in the prototype
chain. Snippet 2 will output only 'qux' to the console, as a for/in loop does not
access all props in the prototype chain.

EDIT: Ok, I had an understading of the prototype chain, but the wrong way. Object.keys()
accesses only the 'own' properties of an obj, whereas the for/in loop will access
all the keys, including any on the prototype object.
*/

// #8

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, arr = Object.keys(obj)) {
  let newObj = {}
  arr.forEach(el => {
    newObj[el] = obj[el]
  })
  return newObj
}

let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
//console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
//console.log(newObj3);       // => { bar: 2 }


// #9

/* 
EDIT: I was wrong,focusing too much on the idea around using dot notation
vs bracket notation and how those arguments would resolve. The general principle of 
the challenge centered on immutable primitives as well as mutable objects.
The obj could be mutated, whereas the string could not. There is also an 
element of scope at play, where the value of qux within the function scope
is changed, but the value associated with qux in the global scope remains unchanged.
*/

// #10

/*
There are 4 objects. Array, nested array, double nested arr, and an empty object
There are 6 primitives. Two numbers, two strings, a null, and a boolean.
*/

// #11

let obj2 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj2.bar[3].xyz = 606;

//console.log(obj2.bar[3])

// #12

function foo(bar) {
  console.log(bar, bar, bar);
}

function bar(arg) {
  return foo(arg)
}

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"

/*
EDIT: I overcomplicated the question. With a case so simply, all we needed was
an ALIAS. A key concept in this chapter. I used a higher order function.
*/

// #13



function foo2(bar) {
  console.log(bar());
}

// foo2(function() {return 'Welcome'});    // Should print 'Welcome'
// foo2(function() {return 3.1415});    // Should print 3.1415
// foo2(function() {return [1,2,3]});    // Should print [1, 2, 3]*/

//EDIT: Still getting a type error... EDIT: JK, just global scope polluted.

// #14

/*
Ojects: Function body of hello, function body of xyzzy, return obj of that function, arr
within that return obj, {} within that return obj

Variables: greeting, name, howdy, foo, greeting, name (args), a, b, c, d
EDIT: hello, xyzzy. and NOT a, b, c, d. Those are Property Names. Missed this in 
reading the instructions.

Primitives: 1, 2, 3, 4, 5, 'Hi', 'Grace' ' '
EDIT: also the Prop names are technicall primitive strings.
*/

// #15

/**
 * Didn't write them all out, but got most all right. Forgot that array indexes 
 * are technicallly property names. Also good to note that property names are 
 * essentially ALL primitve values, since they are strings.
 * Got all objects, got all variables (let, const, parameters), got most
 * property names, forgot about the indexes of arrays
 */

// #16






