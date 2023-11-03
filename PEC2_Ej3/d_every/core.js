// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every((currentValue) => currentValue % 2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((currentValue, i, array) => {
    return typeof currentValue === typeof array[0]
  });
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  // input.every((currentValue, i, array) => {
  //   console.log(typeof currentValue === typeof array[i]);
  //   typeof currentValue === typeof array[i]
  //   console.log(i);
  // });
  // for (let i = 0; i < input.length; i++) {
  //   const arrays = input[i]
  //   arrays.every(currentValue => typeof currentValue === 'object');
  //   // This loop is for inner-arrays
  //   for (let j = 0; j < arrays.length; j++) {
  //     // Accessing each elements of inner-array
  //     const numbers = arrays[j];
  //     matrixNumbers.push(numbers);
  //   }
  // }
  // matrixNumbers.every((currentValue) => currentValue > 0);
  // return input
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  return input;
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
