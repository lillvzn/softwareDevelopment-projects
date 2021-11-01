function expressionMatter(a, b, c) {
  const arr = [a + b + c, a * b * c, (a + b) * c, a * (b + c)];
  return Math.max(...arr);
}
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
