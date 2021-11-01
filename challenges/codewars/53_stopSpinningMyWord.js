function spinWords(string) {
  const splitStr = string.split(" ");
  splitStr.forEach((el) =>
    el.length >= 5
      ? (splitStr[splitStr.indexOf(el)] = [...el].reverse().join(""))
      : el
  );
  return splitStr.join(" ");
}
// https://www.codewars.com/kata/5264d2b162488dc400000001
