function solve(s) {
  const li = [...s];
  let count = 0;
  if (s.toLowerCase() === s || s.toUpperCase() === s) return s;
  else {
    li.forEach((l) => (l.toUpperCase() === l ? count++ : count));
    if (count > s.length / 2) return s.toUpperCase();
    else return s.toLowerCase();
  }
}
// https://www.codewars.com/kata/5b180e9fedaa564a7000009a
