function save(sizes, hd) {
  let temp = [],
    c = 0;
  sizes.forEach((x) => {
    c += x;
    c <= hd ? temp.push(x) : temp;
  });
  return temp.length;
}
// https://www.codewars.com/kata/5d49c93d089c6e000ff8428c
