function diffBig2(arr) {
  const numOne = Math.max(...arr);
  arr.splice(arr.indexOf(numOne), 1);
  const numTwo = Math.max(...arr);
  return numOne - numTwo;
}
// https://www.codewars.com/kata/55e3f27d5dee52d8dd0000a9
