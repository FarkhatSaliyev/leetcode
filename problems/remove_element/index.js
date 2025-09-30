// Input: nums = [1,1,2,3,4], val = 1

// Output: [2,3,4]

function removeElement(nums, val) {
    const res = []
    let count = 0

    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            res.push(nums[i])
            count++
        }
    }

    for(let i=0; i<res.length; i++){
        nums[i] = res[i]
    }

    return count
}

module.exports = removeElement