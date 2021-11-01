function descendingOrder(n) {
  return Number(
    [...String(n)]
      .sort((a, b) => b - a)
      .map(Number)
      .join("")
  );
}
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
