function rotate(nums, k) {
    //O(K*N)

    // for(let i=0; i<k; i++){
    //     let last = nums.pop()
    //     nums.unshift(last)
    // }

    // return nums

    //On

    k = k % nums.length
    
    const firstPart = nums.slice(0, nums.length-k)
    const secondPart = nums.slice(nums.length-k)
    const rotated = secondPart.concat(firstPart)

    for(let i=0; i<nums.length; i++){
        nums[i] = rotated[i]
    }

    return nums
}

module.exports = rotate