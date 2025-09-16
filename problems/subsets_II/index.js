// Input: nums = [1,2,1]
// Output: [[],[1],[1,2],[1,1],[1,2,1],[2]]


function subsetsWithDup(nums) {
    const res = []
    nums.sort((a,b)=> a-b)

    function backTrack(i, subset){
        if(i === nums.length){
            res.push([...subset])
            return
        }

        //Include nums[i]
        subset.push(nums[i])
        backTrack(i+1, subset)
        subset.pop()

        //Don't include nums[i]
        while(i+1 < nums.length && nums[i] === nums[i+1]){
            i+=1
        }
        backTrack(i+1, subset)
    }

    backTrack(0, [])
    return res
}

module.exports = subsetsWithDup