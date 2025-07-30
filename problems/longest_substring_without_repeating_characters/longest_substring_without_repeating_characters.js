// Problem 

// Given a string s, find the length of the longest substring without duplicate characters.
// A substring is a contiguous sequence of characters within a string.

// Input: s = "zxyzxyz"
// Output: 3

function lengthOfLongestSubstring(s) {
    let l = 0
    let r = 0
    let maxLen = 0
    const set = new Set()

    while(r<s.length){
        if(!set.has(s[r])){
            set.add(s[r])
            maxLen = Math.max(maxLen, r-l+1)
            r++
        }else{
            set.delete(s[l])
            l++
        }
    }

    return maxLen
}

module.exports = lengthOfLongestSubstring;
