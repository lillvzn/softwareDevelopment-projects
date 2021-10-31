function high(x) {
  let alphabets = [];
  let alphabetCount = [];
  let idx, word, letter;
  let count = 0;

  for (idx = "a".charCodeAt(); idx <= "z".charCodeAt(); idx++) {
    alphabets.push(String.fromCharCode(idx));
  }

  const statementAsList = x.split(" ");

  for (word = 0; word < statementAsList.length; word++) {
    count = 0;
    for (letter = 0; letter < statementAsList[word].length; letter++) {
      count += alphabets.indexOf(statementAsList[word][letter]) + 1;
    }
    alphabetCount.push(count);
  }
  return statementAsList[alphabetCount.indexOf(Math.max(...alphabetCount))];
}
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
