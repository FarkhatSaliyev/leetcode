function partition(s) {
    const res = []

    function isPalindrome(s, l, r){
        while(l<r){
            if(s[l] !== s[r]) return false
            l++
            r--
        }
        return true
    }

    function backTrack(idx, subset){
        if(idx === s.length){
            res.push([...subset])
            return
        }

        for(let j=idx; j<s.length; j++){
            if(isPalindrome(s, idx, j)){
                subset.push(s.substring(idx, j+1))
                backTrack(j+1, subset)
                subset.pop()
            }
        }
    }

    backTrack(0, [])
    return res
}

module.exports = partition