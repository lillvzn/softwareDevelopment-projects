function duplicateCount(text) {
  const counts = {};
  let count = 0;
  const st = [...text.toLowerCase()];
  st.forEach((x) => (counts[x] = (counts[x] || 0) + 1));
  const li = Object.entries(counts);
  li.forEach((el) => (el[1] > 1 ? count++ : count));
  return count;
}
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
