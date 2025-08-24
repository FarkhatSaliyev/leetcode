// Find First and Last Position of Element in Sorted Array
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Hint: Modify binary search to find the leftmost and rightmost occurrence.

function firstAndLastPosition(nums, target){

    function findFirst(nums, target){
        let start = 0
        let end = nums.length - 1
        let firstPos = -1
        //                      s m e
        // Input: nums = [5,7,7,8,8,10], target = 8

        while (start <= end){
            let mid = Math.floor((start + end) /2)

            if(nums[mid] === target){
                firstPos = mid
                end = mid - 1
            }
            else if(nums[start] < target ){
                start = mid + 1
            }else {
                end = mid - 1
            }
        }

        return firstPos
    }

    function findLast(nums, target){
        let start = 0
        let end = nums.length - 1
        let lastPos = -1
        //                s   m      e
        // Input: nums = [5,7,7,8,8,10], target = 8

        while (start <= end){
            let mid = Math.floor((start + end) /2)

            if(nums[mid] === target){
                lastPos = mid
                start = mid + 1
            }
            else if(nums[start] < target ){
                start = mid + 1
            }else {
                end = mid - 1
            }
        }

        return lastPos
    }

    let first = findFirst(nums, target)
    let last = findLast(nums, target)

    return [first, last]
}

console.log(firstAndLastPosition([5,7,7,8,8,10],8))

// Search Insert Position
// Input: nums = [1,3,5,6], target = 5
// Output: 2
//                s m   e
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Hint: Return the index where the target is or where it should be inserted.

function searchInsertPosition(nums, target){
    let start = 0
    let end = nums.length - 1
    

    while(start <= end){
        let mid = Math.floor((start + end)/2)

        if(nums[mid] === target){
            return mid
        }else if(nums[mid] < target){
            start = mid + 1
        }else {
            end = mid - 1
        }
    }

    return start
}

console.log(searchInsertPosition([1,3,5,6], 2))
console.log(searchInsertPosition([1,3,5,6], 5))

// Find Minimum in Rotated Sorted Array
//                s     m     e
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Hint: Compare mid with right to decide which half to search.

function minInRotatedArr(nums){
    let start = 0
    let end = nums.length - 1

    while(start < end){
        let mid = Math.floor((start+end)/2)

        if(nums[mid] > nums[end]){
            start = mid + 1
        }else {
            end = mid
        }
    }

    return nums[start]
}

// Search in Rotated Sorted Array
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Hint: Identify which side is sorted, then decide which side to binary search.

function searchInRotatedArr(nums, target){
    let start = 0
    let end = nums.length - 1

    while(start<=end){
        let mid = Math.floor((start+end)/2)

        if(nums[mid] === target){
            return mid
        } 
        
        if(nums[mid] >= nums[start]){
            if(target >= nums[start] && target < nums[mid]){
                end = mid - 1
            }else {
                start = mid + 1
            }
        }else {
            if(target <= nums[end] && target > nums[mid]){
                start = mid + 1
            }else {
                end = mid - 1
            }
        }
    }

    return -1
}

console.log(searchInRotatedArr([4,5,6,7,0,1,2], 0))

