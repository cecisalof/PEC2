// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every((currentValue) => currentValue % 2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((currentValue, i, array) => typeof currentValue === typeof array[0]);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every((currentValue, i, array) => typeof currentValue === typeof array[i] && currentValue.every(numbers => numbers > 0)
  );
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
