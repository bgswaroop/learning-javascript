// Arrays - It is a datastructure that is used to represent a list of items

let selectedColors = ['red', 'blue'];
console.log(selectedColors)
console.log(selectedColors[0])

// We can extend this array. Note, length is dynamic
selectedColors[2] = 'green'
console.log(selectedColors)

// Note - we have skipped a few indices, and the array gets extended with empty values in between
selectedColors[4] = 'black'
console.log(selectedColors)

// A single array can contain multiple types
// We can access any member of this class 
console.log(selectedColors.length)
