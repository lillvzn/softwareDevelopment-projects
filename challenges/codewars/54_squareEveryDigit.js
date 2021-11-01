function squareDigits(num) {
  const n = [...String(num)];
  let res = [];
  n.forEach((val) => res.push(val ** 2));
  return Number(res.join(""));
}
// https://www.codewars.com/kata/546e2562b03326a88e000020
