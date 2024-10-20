let name = 'Swaroop';
let age = 32;

// Below person is an object and on the right "{}" is an object literal;
// let person = {};

// We can add properties to a person object
let person = {
  name: 'Swaroop',
  age: 32
}

console.log(person);

// We can change the value of properties of a person object in two ways
// - dot notation
// - bracket notation

// Using dot notation
person.name = 'Guru Swaroop'
console.log(person.name)

// Using bracket notation
person['name'] = 'Guru Swaroop Bennabhaktula'
console.log(person.name)

// Which notation is preferred? It depends
// - In general use the dot notation
// - However, when we do not know the target property untill the runtime, we can use the bracket notation. For instance, based on a selection

let selection = 'name';
person[selection] = 'Sri Sathya Sai';

console.log(person.name)

// We can also add new properties at runtime
person['height'] = '6 feet'

