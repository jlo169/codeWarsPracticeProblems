// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var threeSum = function(nums) {
	const answerArr = [];
	nums = nums.sort(function(a,b) {return a-b});
  for(let firstNum = 0; firstNum < nums.length-2; firstNum++) {
		if (nums[firstNum] > 0) {
			break;
		}
		if (nums[firstNum] === nums[firstNum - 1]) {
			continue;
		}
		const target = 0 - nums[firstNum];
		let secondNum = firstNum + 1;
		let thirdNum = nums.length - 1;
		while (secondNum < thirdNum) {
			if (nums[secondNum] + nums[thirdNum] === target) {
				answerArr.push([nums[firstNum], nums[secondNum], nums[thirdNum]]);
				while (secondNum < thirdNum && nums[secondNum] === nums[secondNum + 1]) {
					secondNum += 1;
				}
				while (secondNum < thirdNum && nums[thirdNum] === nums[thirdNum - 1]) {
					thirdNum -= 1;
				}
				secondNum++;
				thirdNum--;
			} else if (nums[secondNum] + nums[thirdNum] < target) {
				secondNum += 1;
			} else {
				thirdNum -= 1;
			}
		}
	}
	return answerArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// threeSum([-1, 0, 1, 2, -1, -4]);
// turns to [-4. -1, -1, 0, 1, 2];