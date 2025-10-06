// Input: s = ["n","e","e","t"]

// Output: ["t","e","e","n"]

function reverseString(s) {
    let l =0
    let r =s.length-1

    while(l<r){
        let temp = s[l]
        s[l] = s[r]
        s[r] = temp

        l++
        r--
    }
}

module.exports = reverseString