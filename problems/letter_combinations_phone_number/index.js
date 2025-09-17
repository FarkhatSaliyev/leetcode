function letterCombinations(digits) {
    if(!digits.length) return []

    const map = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z'],
    }
    const res = []

    function dfs(idx, substr){
        if(idx === digits.length){
            res.push(substr)
            return
        }

        for(let j of map[digits[idx]]){
            dfs(idx+1, substr+j)
        }
    }

    dfs(0, '')
    return res
}

module.exports = letterCombinations