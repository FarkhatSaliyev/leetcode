// Problem

// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.
// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

// Input: s = "XYYX", k = 2
// Output: 4


function characterReplacement(s, k) {
    const obj = {}
    let l = 0
    let r = 0
    let len = 0
    let maxFreq = 0

    while(r<s.length){
        if(!obj.hasOwnProperty(s[r])){
            obj[s[r]] = 1
        }else{
            obj[s[r]] += 1
        }

        maxFreq = Math.max(maxFreq, obj[s[r]])
        
        if((r-l+1) - maxFreq > k){
            obj[s[l]] -=1
            l++
        }

        len = Math.max(len, r-l+1)
        r++
    }

    return len
}

module.exports = characterReplacement