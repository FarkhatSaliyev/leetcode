// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

function subsets(nums) {
    let res = [[]]

    for(let i=0; i<nums.length; i++){
        let resLen = res.length

        for(let j=0; j<resLen; j++){
            let subSet = res[j].slice()
            subSet.push(nums[i])
            res.push(subSet)
        }
    }

    return res
}

module.exports = subsets