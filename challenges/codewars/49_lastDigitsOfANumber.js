function lastDigit(n, d) {
  let di = [...String(n)].map(Number);
  let last = d > 0 ? [...String(n).slice(-d)].map(Number) : [];
  return d > di.length ? di : last;
}
// https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0
