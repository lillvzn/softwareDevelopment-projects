function narcissistic(value) {
  const val = String(value).split("");
  let sum = 0;
  val.forEach((el) => (sum += Number(el) ** val.length));
  return value === sum ? true : false;
}
// https://www.codewars.com/kata/5287e858c6b5a9678200083c
