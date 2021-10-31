function median(array) {
  array.sort((a, b) => a - b);
  const med =
    array.length % 2 === 0
      ? (array[array.length / 2 - 1] + array[array.length / 2]) / 2
      : array[Math.round(array.length / 2) - 1];
  return med;
}
// https://www.codewars.com/kata/5864eb8039c5ab9cd400005c
