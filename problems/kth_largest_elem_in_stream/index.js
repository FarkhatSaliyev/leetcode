class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.nums = nums
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val)
        this.nums.sort((a,b)=>a-b)

        return this.nums[this.nums.length - this.k]
    }
}

module.exports = KthLargest