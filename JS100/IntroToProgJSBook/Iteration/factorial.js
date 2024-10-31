function factorial(num) {
  //output: single value
  //factorial 5: 1 * 2 * 3 * 4 * 5
  // initialize a factorial value 1
  //loop from 1 to the num, inclusive,
    // reassign factorial variable to factorial variable * current
    
  // return factorial variable
  let fact = 1;
  if (num === 0) {
    return 0
  } else if (num === 1) {
    return 1;
  } else {
    for (let i = 2; i <= num; i++) {
      fact *= i
    }
  }
  return fact;
}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(5))
console.log(factorial(6))
