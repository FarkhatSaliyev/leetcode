// Need to return kth largest from sorted array

// Input: nums = [2,3,1,5,4], k = 2
// Output: 4

function findKthLargest(nums, k) {
    const sorted = nums.sort((a,b)=> a-b)
    return sorted[sorted.length - k]
}

module.exports = findKthLargest