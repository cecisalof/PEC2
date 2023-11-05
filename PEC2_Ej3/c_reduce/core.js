function sum(array) {
  return array.reduce((a, b) => a + b);
}

function productAll(array) {
  let list = [];
  array.map(lists => lists.map(numbers => list.push(numbers)));
  return list.reduce((a, b) => a * b)
}

function objectify(array) {
  return array.reduce((result, [key, value]) => {
    result[key] = value;
    return result;
  }, {});
}

function luckyNumbers(array) {
  // needs review!
  const luckyNumbers = [];
  const luckySentence = 'Your lucky numbers are: '
  array.reduce((collector, num) => {
    luckyNumbers.push(String(num));
  }, []);
  const lastElement = luckyNumbers.pop();
  const join = luckyNumbers.join(', ');
  return luckySentence + join + ', and ' + lastElement;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
