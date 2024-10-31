function clone(obj) {
  let entries = Object.entries(obj);
  let newObj = {};
  while (entries.length > 0) {
    newObj[entries[0][0]] =entries[0][1];
 entries.shift();
  }
  return newObj;
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false