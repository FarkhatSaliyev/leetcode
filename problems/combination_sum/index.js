// Input: 
// nums = [2,5,6,9] 
// target = 9

// Output: [[2,2,5],[9]]

function combinationSum(nums, target) {
    const res = []

    function dfs(start, remaining, path){
        if(remaining === 0){
            res.push([...path])
        }

        if(remaining < 0) return

        for(let i=start; i<nums.length; i++){
            path.push(nums[i])
            dfs(i, remaining - nums[i], path)
            path.pop()
        }
    }

    dfs(0, target, [])
    return res
}

module.exports = combinationSum