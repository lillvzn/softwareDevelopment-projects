function findNextSquare(sq) {
  const sqRoot = sq ** 0.5;
  return Number.isInteger(sqRoot) ? (sqRoot + 1) ** 2 : -1;
}
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013
