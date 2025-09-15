function combinationSum2(candidates, target) {
    const res = []
    candidates.sort((a,b)=> a-b)
    
    function backTrack(start, remaining, path){
        if(remaining === 0){
            res.push([...path])
        }

        if(remaining < 0) return

        for(let i=start; i<candidates.length; i++){
            if(i > start && candidates[i] === candidates[i-1]){
                continue
            }

            path.push(candidates[i])
            backTrack(i+1, remaining - candidates[i], path)
            path.pop()
        }
    }

    backTrack(0, target, [])
    return res
}

module.exports = combinationSum2