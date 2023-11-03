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
  // your code here
  // console.log(array);
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
