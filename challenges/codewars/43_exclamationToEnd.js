function remove(s) {
  const count = (s.match(/!/g) || []).length;
  return s.replace(/!/g, "").concat("!".repeat(count));
}
// https://www.codewars.com/kata/57fafd0ed80daac48800019f
