function multiplyBy10(array) {
  return array.map(number => number * 10)
}

function shiftRight(array) {
  return array.map((_, i, a) => a[(i + a.length - 1) % a.length]);
}

function onlyVowels(array) {
  return array.map(word => word.replace(/[bcdfghjklmnpqrstvwxyz]/g, ''));
}

function doubleMatrix(array) {
  let doubles = [];
  let finalDoubles = []
  array.map((setOfNumbers, index) => {
    setOfNumbers.map(numbers => {
      doubles.push(numbers * 2);
    })
    finalDoubles.push(doubles.slice(index * 3, index + doubles.length));
  })
  return finalDoubles;
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
