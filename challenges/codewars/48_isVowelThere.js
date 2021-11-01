function isVow(a) {
  let vowels = [117, 97, 101, 105, 111];
  let res = [];
  a.forEach((x) =>
    vowels.includes(x) ? res.push(String.fromCharCode(x)) : res.push(x)
  );
  return res;
}
// https://www.codewars.com/kata/57cff961eca260b71900008f
