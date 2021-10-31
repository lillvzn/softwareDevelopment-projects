function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach((sheep) => (sheep ? (count += 1) : count));
  return count;
}
// https://www.codewars.com/kata/54edbc7200b811e956000556
