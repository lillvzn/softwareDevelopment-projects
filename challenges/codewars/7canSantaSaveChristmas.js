function determineTime(durations) {
  let numbers = 0;
  for (let i = 0; i < durations.length; i++) {
    numbers += durations[i].split(":").reduce((acc, time) => 60 * acc + +time);
  }
  if (numbers / 3600 <= 24) return true;
  return false;
}
// https://www.codewars.com/kata/5857e8bb9948644aa1000246
