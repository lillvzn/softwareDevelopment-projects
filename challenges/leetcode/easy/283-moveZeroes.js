/*

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

*/

const moveZeroes = function (nums) {
  let count = 0;
  let len = nums.length;
  while (len--) {
    if (nums[len] === 0) {
      count++;
      nums.splice(nums.indexOf(nums[len]), 1);
    }
  }
  nums.push(...Array(count).fill(0));
  return nums;
};
