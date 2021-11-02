function removeParentheses(s) {
  res = "";
  pCount = 0;
  for (let i of s) {
    if (i === "(") pCount += 1;
    else if (i === ")") pCount -= 1;
    else {
      if (pCount === 0) res += i;
    }
  }
  return res;
}
// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8
