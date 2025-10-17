function maxProfit(prices) {

    let l = 0
    let r = 1
    let profit = 0

    while(r<prices.length){
        if(prices[l]<prices[r]){
            profit += prices[r] - prices[l]
        }
        l++
        r++
    }

    return profit
}

module.exports = maxProfit