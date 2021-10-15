function humanReadable(seconds) {
  let h, m, s;
  let secRemaining = seconds;
  if (seconds === 0) {
    return `00:00:00`;
  }
  if (seconds <= 359999) {
    h = Math.trunc(secRemaining / 3600);
    secRemaining -= h * 3600;
    m = Math.trunc(secRemaining / 60);
    secRemaining -= m * 60;
    s = Math.trunc(secRemaining);
  }
  if (h < 10) h = "0" + String(h);
  if (m < 10) m = "0" + String(m);
  if (s < 10) s = "0" + String(s);

  return `${h}:${m}:${s}`;
}

// https://www.codewars.com/kata/52685f7382004e774f0001f7
