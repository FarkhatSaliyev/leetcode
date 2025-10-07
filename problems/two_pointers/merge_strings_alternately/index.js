// Input: word1 = "abc", word2 = "xyz"

// Output: "axbycz"

function mergeAlternately(word1, word2) {
    let l =0
    let r =0
    let res = ''

    while(l<word1.length){
        res+=word1[l]
        l++
        
        if(word2[r]){
            res+=word2[r]
            r++
        }
    }

    if(r<word2.length){
        while(r<word2.length){
            res+=word2[r]
            r++
        }
    }

    return res
}

module.exports = mergeAlternately