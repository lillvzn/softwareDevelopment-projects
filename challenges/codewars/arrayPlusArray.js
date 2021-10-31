function arrayPlusArray(arr1, arr2) {
  let res = 0;
  const conc = arr1.concat(arr2);
  conc.forEach((el) => (res += el));
  return res;
}
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
