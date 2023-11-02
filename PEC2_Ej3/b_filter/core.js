function onlyEven(array) {
  return array.filter(number => number % 2 === 0)
}

function onlyOneWord(array) {
  return array.filter(words => words.split(" ").length == 1);
}

function positiveRowsOnly(array) {
  return array.filter(secondArray => secondArray.every(numbers => numbers >= 1));
}

function allSameVowels(array) {
  // your code here
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
