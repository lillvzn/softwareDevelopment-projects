function firstNonConsecutive(arr) {
  let actualNums = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) actualNums.push(i);
  for (let j = 0; j < arr.length; j++) {
    if (!arr.includes(actualNums[j])) return actualNums[j + 1];
  }
  return null;
}
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
