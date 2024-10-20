// Functions in JS

// Note that we did not include a semicolon ; at the end of this function
// It is not needed for functions. We need a semicolon only for statements.
function greet() {
  console.log('Hello World');
}
greet();

// We can have parameters for a funcition
function greet1(name) {
  console.log('Hello ' + name);
}
// We now call the function with a argument
greet1('Swaroop');

// We can have multiple parameters
function greet2(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}
// We now call the function with a argument
greet2('Swaroop');
greet2('Swaroop', 'Bennabhaktula');


// We will now see a function which returns a computation
function square(number) {
  return number * number;
}
let number  = square(2);
console.log(number)
console.log(square(2))
