// 2544. Alternating Digit Sum

// The most significant digit is assigned a positive sign.
// Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.

 // Example 1:
// Input: n = 521
// Output: 4
// Explanation: (+5) + (-2) + (+1) = 4.

// Example 2:
// Input: n = 111
// Output: 1
// Explanation: (+1) + (-1) + (+1) = 1.

// Example 3:
// Input: n = 886996
// Output: 0
// Explanation: (+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0.

function altSum(n){
    const arr = n.toString().split('').map(num=>Number(num))
    let res = 0

    for(let i=0; i<arr.length; i++){
        if(i%2 === 0){
            res += arr[i]
        }else {
            res -= arr[i]
        }
    }

    return res
}

module.exports = altSum