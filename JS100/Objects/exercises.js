// #1
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

// console.log(student.courses);
// console.log(student.locker);
// console.log(student.grade);

// #2 #4
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: (name) => console.log(`Hey, ${name}!`),
};

jane.location.country;
jane.greet('Bobby')

// #3
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido['age'] = 10;
fido['favorite food'] = 'mushrooms';

//console.log(fido);
// Add property 'age'.
// Add property 'favorite food'.

// #5
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// #6
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let arrOfKeys = Object.keys(vehicle);
// for (let prop in vehicle) {
//   arrOfKeys.push(prop);
// }
// console.log(arrOfKeys);

// #7
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

console.log(Object.entries(person))
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// #8
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person1 = {};
while (nestedArray.length > 0) {
  person1[nestedArray[0][0]] = nestedArray[0][1];
  nestedArray.shift();
}
console.log(person1)

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }