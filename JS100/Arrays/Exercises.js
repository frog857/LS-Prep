
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

vocabulary.forEach(el => {
  for (let i = 0; i < el.length; i++) console.log(el[i])
})

// Expected output:
// happy
// cheerful
// merry
// etc...

function filter(input) {
  return Array.isArray(input)
}

console.log(filter('meow'))