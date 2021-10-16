function digital_root(n) {
  if (n < 10) {
    return n;
  }
  const lastDigit = n % 10;
  const remainDigits = Math.floor(n / 10);
  return digital_root(lastDigit + digital_root(remainDigits));
}
// https://www.codewars.com/kata/541c8630095125aba6000c00
