// #1

/**
 * This should log the mutated array [1, 4, 3]. This is because when dealing with
 * variables and objects, JavaScript references a pointer, not a value. While we did not
 * reassign Array2, we reassigned Array1, which mutated the array referenced by the 
 * same pointer used by the variable Array2
 * 
 * EDIT: Better wording: Array2 and Array1 reference the SAME ARRAY. Also, assigning one
 * array to another array COPIES THE REFERENCE, not the array itself.
 */

// #2

/**
 * A few things stick out. We've made a Reference Error. Seemingly, we've
 * tried to reference greeting, but we did not define it, at least within the scope
 * we want to access. We also know this error occured at line 4 at character 15.
 * EDIT: we also know the error occured in the 'hello' function (in that object?)
 * EDIT: ^ is JS's guess at where the error occured.
 * EDIT: Line 8 tells us at Object.<anonymous> which indicates an anonymous function
 * in the global sope... cool. and it was invoked at line 13
 * EDIT: Useful note from watching solution video: The 'stack' is visualized in the trace!
 * I.e. the top line is the top of the stack ('where we were' per se)
 */

// #3

//console.log(Math.sqrt(37))

// #4

function findMax(arr) {
  return Math.max(...arr) // spread operator allows us to pass in individual values from arr
};

//console.log(findMax([1,4,7,-7]))

// #5

/**
 * This function seemingly takes a sentence as an argument under the parameter name string.
 * The function then splits the string into an array of strings by the ' ' character.
 * Then it will reverse the order of the arr. Lastly it will map an anonymous function
 * on the reversed arr, which will return the element's length as the new value.
 * This mapped (copied) array will be returned.
 */

// #6

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, regex) {
  // let newArr = [];
  // arr.forEach((word) => {
  //   if (regex.test(word)) {
  //     console.log(`${word} passes the regex`)
  //     newArr.push(word)
  //   }
  // })
  // return newArr; 

  return arr.filter((word) => {
    return regex.test(word)
  })
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
/**
 * EDIT: I was close to finding the intuitive filter solution! I'm just not understanding
 * something about the true value being returned within the => function... I used
 * {} to define the function scope, whereas LS solution used one line...
 * EDIT: It was the return keyword. When in a single line exp, you don't need it. But
 * in the {} function, whether its an anon function or an => function, you 
 * need return to pass that variable boolean back to filter..........!!!!!
 */

