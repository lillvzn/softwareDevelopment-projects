function findMissingLetter(array) {
  let alpha = [];
  let i, j;
  for (
    i = array[0].charCodeAt();
    i <= array[array.length - 1].charCodeAt();
    i++
  ) {
    alpha.push(String.fromCharCode(i));
  }
  for (j = 0; j < alpha.length; j++) {
    if (!array.includes(alpha[j])) return alpha[j];
  }
}

// https://www.codewars.com/kata/5839edaa6754d6fec10000a2
