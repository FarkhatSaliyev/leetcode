function firstMissingPositive(nums) {
    const sorted = nums.sort((a,b)=> a-b).filter(num => num > 0)

    if(sorted.length === 0) return 1

    let expected = 1

    for(let i=0; i<sorted.length; i++){
        if(sorted[i] === sorted[i-1]) continue

        if(sorted[i] > expected) return expected
        else expected = sorted[i] + 1
    }

    return expected
}

module.exports = firstMissingPositive