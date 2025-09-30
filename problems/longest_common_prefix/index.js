// Input: strs = ["bat","bag","bank","band"]

// Output: "ba"

function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';
    
    let res = ''

    for(let i=0; i<strs[0].length; i++){
        for(let j=0; j<strs.length; j++){
            if(i === strs[j].length || strs[0][i] !== strs[j][i]){
                return res
            }
        }

        res += strs[0][i]
    }

    return res
}

module.exports = longestCommonPrefix;