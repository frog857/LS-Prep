// #1 

// 4, 5, 0, 3, 1
// EDIT: Wrong on last one. More complete understanding of length:
// It is the highest index + 1. Even as other elemnts are undefined.

// #2

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

function evenLogger(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 === 0) console.log(arr[i])
  // }

  arr.forEach(el => {
    if (el % 2 === 0) console.log(el)
  })
}

//evenLogger(myArray)

// #3

let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// myArray2.forEach(el => {
//   for (let i = 0; i < el.length; i++) {
//     if (el[i] % 2 === 0) console.log(el[i])
//   }
// })

// note: I prefer a for loop nested in a forEach... idk why. It seems natural logically to m

// #4 

let myArray3 = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArr = myArray3.map((num) => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
})

//console.log(newArr)

// #5

function findIntegers(arr) {
  // output is a new arr with only integers, nuthin else
  return arr.filter((el) => {
    return Number.isInteger(el)
  })
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
//console.log(integers); // => [1, 3, -4]
 
// #6

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
//console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  let newArr = arr.map(el => {
    return el.length;
  })
  return newArr.filter(el => {
    if (el % 2 !== 0) return el
  })
}

// #7

function sumOfSquares(arr) {
  return arr.reduce(function(acc, cVal) {
    return acc + cVal*cVal;
  }, 0)
}

//console.log(sumOfSquares([3, 5, 7]))

//# 8

function odderLengths(arr) {
  // init an empty arr

  // for each el in arr:
    // use reduce to get length, and return
  arr.reduce(function(filteredNums, string) {
    
    return filteredNums.push()
  }, [])
  return soltion = newArr.map
  // init another empty arr
  //loop thru arr
    // if el is odd, push to new arr
}

//console.log(odderLengths(['cbds', 'gtf', 'meow meow', "skrr"]))

// #9
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function hasThree(arr) {
  return (arr.includes(3)) ? true : false
}

// console.log(hasThree(numbers1))
// console.log(hasThree(numbers2))
// console.log(hasThree(numbers3))

let arr3 = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr3[1][3] = 606
//console.log(arr3[1])


