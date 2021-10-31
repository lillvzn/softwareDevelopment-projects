function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
// https://www.codewars.com/kata/554b4ac871d6813a03000035
