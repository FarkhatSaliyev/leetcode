// Input: piles = [1,4,3,2], h = 9
// Output: 2
// Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.

function eatingBananas(piles, h){
    let start = 1
    let end = Math.max(...piles)
    let res = end

    while(start<=end){
        let mid = Math.floor((start+end)/2)
        let totalHours = 0

        for(let i=0; i<piles.length; i++){
            let hours = Math.ceil(piles[i]/mid)
            totalHours +=hours
        }

        if(totalHours <= h){
            res = mid
            end = mid - 1
        }else{
            start = mid + 1
        }
    }

    return res
}

module.exports = eatingBananas