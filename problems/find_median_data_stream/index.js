// Input:
// ["MedianFinder", "addNum", "1", "findMedian", "addNum", "3" "findMedian", "addNum", "2", "findMedian"]

// Output:
// [null, null, 1.0, null, 2.0, null, 2.0]

// Explanation:
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.findMedian(); // return 1.0
// medianFinder.addNum(3);    // arr = [1, 3]
// medianFinder.findMedian(); // return 2.0
// medianFinder.addNum(2);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

class MedianFinder {
    constructor() {
        this.nums = []
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.nums.push(num)
        this.nums.sort((a,b)=> a-b)
    }

    /**
     * @return {number}
     */
    findMedian() {
       if(!this.nums.length){
        return 0
       }

       let mid = Math.floor(this.nums.length / 2)
       if(this.nums.length % 2 === 0){
        return (this.nums[mid -1] + this.nums[mid]) / 2
       }else{
        return this.nums[mid]
       }
    }
}

module.exports = MedianFinder
