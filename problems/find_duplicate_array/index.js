// Input: nums = [1,2,3,2,2]
// Output: 2

function findDuplicate(nums){
    const obj = {}

    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]){
            return nums[i]
        }

        obj[nums[i]] = true
    }

    return null
}

module.exports = findDuplicate;