function findMedianSortedArrays(nums1, nums2) {
    // Input: nums1 = [1,3], nums2 = [2,4]
    // Output: 2.5
    // Explanation: Among [1, 2, 3, 4] the median is (2 + 3) / 2 = 2.5.

    // Brute force O(n+m)
    // const mergedArr = [...nums1, ...nums2]
    // const sortedArr = mergedArr.sort((a,b)=> a-b)

    // if(sortedArr.length % 2 === 1){
    //     let mid = Math.floor(sortedArr.length / 2 )
    //     return sortedArr[mid]
    // }else{
    //     let midRight = Math.floor(sortedArr.length / 2)
    //     let midLeft = midRight - 1
    //     return (sortedArr[midRight] + sortedArr[midLeft])/2
    // }

    //Optimal Binary search + partition
    if(nums1.length > nums2.length){
        return findMedianSortedArrays(nums2, nums1)
    }

    const totalLength = nums1.length + nums2.length
    const half = Math.floor((totalLength+1)/2)

    let start = 0
    let end = nums1.length

    while(start<=end){
        let mid1 = Math.floor((start+end) / 2)
        let mid2 = half - mid1

        let left1 = mid1 > 0 ? nums1[mid1 - 1] : -Infinity
        let right1 = mid1 < nums1.length ? nums1[mid1] : Infinity
        let left2 = mid2 > 0 ? nums2[mid2 - 1] : -Infinity
        let right2 = mid2 < nums2.length ? nums2[mid2] : Infinity

        if(left1 <= right2 && left2 <= right1){
            if(totalLength % 2 === 1){
                return Math.max( left1, left2 )
            }else{
                return (Math.max(left1, left2) + Math.min(right1, right2))/2
            }
        }else if( left1 > right2 ){
            end = mid1 - 1
        }else {
            start = mid1 + 1
        }
    }
}

module.exports = findMedianSortedArrays