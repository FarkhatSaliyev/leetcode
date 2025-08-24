
function search(nums, target){
    // Input: nums = [-1,0,2,4,6,8], target = 4
    // Output: 3   
 
    let start = 0
    let end = nums.length - 1

    while(start <= end){
        let mid = Math.floor((start+end)/2)

        if(nums[mid] === target){
            return mid
        }else if( nums[mid] < target ){
            start = mid + 1
        }else {
            end = mid - 1
        }
    }

    return -1
}

module.exports = search