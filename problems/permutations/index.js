function  permute(nums) {
    const res = []

    function backTrack(path, used){
        if(nums.length === path.length){
            res.push([...path])
            return
        }

        for(let i=0; i<nums.length; i++){
            if(used[i]) continue

            path.push(nums[i])
            used[i] = true

            backTrack(path, used)

            path.pop()
            used[i] = false
        }

    }

    backTrack([], Array(nums.length).fill(false))
    return res 
}

module.exports = permute