function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (true) {
    if (p0 >= p) break;
    else if (p0 < p) {
      p0 += p0 * (percent / 100) + aug;
      years++;
    } else years;
  }
  return years;
}

// https://www.codewars.com/kata/563b662a59afc2b5120000c6
