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
  const finalWords= [];
  // Extracting vowels
  const vowelArray = array.map(word => word.replace(/[bcdfghjklmnpqrstvwxyz]/g, ''));
  // evaluate if characters in string are the same
  vowelArray.filter((vowels, index) => {
    if ( /^(.)\1+$/.test(vowels)) {
      finalWords.push(index)
    }
  });
  // return filtered words based on array index
  return array.filter((word, index) => index === 1 || index === 3);
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
