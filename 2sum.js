// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const targetValue = target - nums[i];
        for (let y = i + 1; y < nums.length; y++) {
            if (nums[y] === targetValue) {
                return [i, y]
            }
        }
    }
}; 

console.log(twoSum([-1,-2,-3,-4,-5], -8))