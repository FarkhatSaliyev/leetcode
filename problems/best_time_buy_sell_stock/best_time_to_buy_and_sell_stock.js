// Problem 

// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

// Input: prices = [10,1,5,6,7,1]
// Output: 6


function maxProfit(prices) {

    // let buy = prices[0]
    // let profit = 0

    // for(let i=0; i<prices.length; i++){
    //     if(prices[i]<buy){
    //         buy = prices[i]
    //     }

    //     let currentProfit = prices[i] - buy
    //     if(currentProfit > profit){
    //         profit = currentProfit
    //     }
    // }
    // return profit


    let l = 0 
    let r = 1
    let profit = 0

    //Visual two pointers
    //  l  
    //  r
    // [7,1,5,3,6,4]

    while(r<prices.length){
        if(prices[r]>prices[l]){
            let currProfit = prices[r]-prices[l]
            profit = Math.max(profit, currProfit)
        }else {
            l = r
        }

        r++
    }

    return profit
}

module.exports = maxProfit;