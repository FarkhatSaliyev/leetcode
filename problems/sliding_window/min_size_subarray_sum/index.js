// Input: target = 10, nums = [2,1,5,1,5,3]

// Output: 3

function minSubArrayLen(target, nums) {
    
    //Brute force
    // let sum = 0
    // let res = Infinity

    // for(let i=0; i<nums.length; i++){
    //     sum = 0
    //     for(let j=i; j<nums.length; j++){
    //         sum += nums[j]

    //         if(sum >= target){
    //             res = Math.min(res, j-i+1)
    //             break
    //         }
    //     }
    // }

    // return res === Infinity ? 0 : res

    //Optimal
    let l=0
    let r=0
    let sum=0
    let res = Infinity

    while(r<nums.length){
        sum += nums[r]

        while(sum >= target){
            res = Math.min(res, r-l+1)
            sum -= nums[l]
            l++
        }

        r++
    }

    return res === Infinity ? 0 : res
}

module.exports = minSubArrayLen