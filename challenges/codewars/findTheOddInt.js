function getKeyByValue(object, value) {
  return Number(Object.keys(object).find((key) => object[key] === value));
}
function findOdd(A) {
  let counts = {};
  let oddIndex = 0;
  A.forEach(function (i) {
    counts[i] = (counts[i] || 0) + 1;
  });
  let maxCount = Object.values(counts);
  maxCount.forEach(function (j) {
    if (j % 2 !== 0) oddIndex = j;
  });
  return getKeyByValue(counts, oddIndex);
}
// https://www.codewars.com/kata/54da5a58ea159efa38000836
