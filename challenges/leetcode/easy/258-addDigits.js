/*

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1

*/

// Solution - 1

const addDigits = function (num) {
  const nums = String(num);
  let res = 0;
  if (nums.length === 1) res = num;
  else if (nums.length > 1) {
    nums.split("").forEach((val) => (res += Number(val)));
    if (String(res).length > 1) return addDigits(res);
  }
  return res;
};

// Solution - 2

const addDigits2 = function (num) {
  const nums = [...String(num)]
    .map(Number)
    .reduce((prev, next) => prev + next, 0);
  if (String(nums).length > 1) return addDigits2(nums);
  return nums;
};
