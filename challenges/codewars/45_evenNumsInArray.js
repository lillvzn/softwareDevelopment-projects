function evenNumbers(array, number) {
  let newArr = [];
  for (let i = array.length; i >= 0; i--) {
    if (newArr.length < number && array[i] % 2 === 0) {
      newArr.push(array[i]);
    }
  }
  return newArr.reverse();
}
// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
