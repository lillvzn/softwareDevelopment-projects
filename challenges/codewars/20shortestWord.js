function findShort(s) {
  s = s.split(" ");
  let count = s[0].length;
  s.forEach((el) => (el.length < count ? (count = el.length) : count));
  return count;
}
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
