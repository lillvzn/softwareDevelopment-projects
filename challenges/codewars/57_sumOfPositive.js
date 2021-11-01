function positiveSum(arr) {
  let sum = 0;
  arr.forEach((el) => (el > 0 ? (sum += el) : sum));
  return sum;
}
// https://www.codewars.com/kata/5715eaedb436cf5606000381
