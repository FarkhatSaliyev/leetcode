function maxSlidingWindow(nums, k) {
  let res = [];
  let l = 0;
  let r = k;
  while (r <= nums.length) {
    let maxInWindow = -Infinity;
    for (let i = l; i < r; i++) {
      if (nums[i] > maxInWindow) {
        maxInWindow = nums[i];
      }
    }
    res.push(maxInWindow);
    l++;
    r++;
  }

  return res;
}

module.exports = maxSlidingWindow;
