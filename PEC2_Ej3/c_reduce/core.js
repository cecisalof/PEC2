function sum(array) {
  return array.reduce((a, b) => a + b);
}

function productAll(array) {
  console.log(array);
}

function objectify(array) {
  return array.reduce((result, [key, value]) => {
    result[key] = value;
    return result;
  }, {});
}

function luckyNumbers(array) {
  // your code here
  console.log(array);
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
