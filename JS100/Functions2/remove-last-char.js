function removeLastChar(string) {
  // access the last char of the string arg using length prop, and remove it
  return string.slice(0, string.length - 1);
}


console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'