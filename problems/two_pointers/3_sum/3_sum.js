// Problem

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

function threeSum(nums) {
  const res = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = sortedNums.length - 1;

    while (l < r) {
      if (sortedNums[i] + sortedNums[l] + sortedNums[r] < 0) {
        l++;
      } else if (sortedNums[i] + sortedNums[l] + sortedNums[r] > 0) {
        r--;
      } else {
        res.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
        l++;
        while (sortedNums[l] == sortedNums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return res;
}

module.exports = threeSum;
