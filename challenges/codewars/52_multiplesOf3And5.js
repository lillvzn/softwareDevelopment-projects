function solution(number) {
  let li = 0;
  if (number < 0) return 0;
  else {
    for (let i = 1; i < number; i++) {
      i % 3 === 0 || i % 5 === 0 ? (li += i) : li;
    }
  }
  return li;
}
// https://www.codewars.com/kata/514b92a657cdc65150000006
