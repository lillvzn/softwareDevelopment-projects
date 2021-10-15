function list(names) {
  let res = [];
  for (let i = 0; i < names.length; i++) {
    res.push(names[i].name);
  }
  return res.join(", ").replace(/,(?=[^,]*$)/, " &");
}
// https://www.codewars.com/kata/53368a47e38700bd8300030d
