function onlyEven(array) {
  return array.filter(number => number % 2 === 0)
}

function onlyOneWord(array) {
  return array.filter(words => words.split(" ").length == 1);
}

function positiveRowsOnly(array) {
  // your code here
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
