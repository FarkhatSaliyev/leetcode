// Input: s = "abbda"

// Output: true
// Explanation: "We can delete the character 'd'.

function validPalindrome(s) {
    let l = 0
    let r = s.length-1

    function isPalindrome(s, l, r){
        while(l<r){
            if(s[l] !== s[r]){
                return false
            }

            l++
            r--
        }

        return true
    }

    while(l<r){
        if(s[l] !== s[r]){
            return isPalindrome(s, l+1, r) || isPalindrome(s, l, r-1)
        }

        l++
        r--
    }

    return true
}

module.exports = validPalindrome