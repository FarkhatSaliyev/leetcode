function majorityElement(nums) {
    const obj = {}

    for(let i=0; i<nums.length; i++){
        if(!obj[nums[i]]) obj[nums[i]] = 1
        else obj[nums[i]] ++
    }

    const res = []
    for(let j in obj){
        if(obj[j] > Math.floor(nums.length/3)){
            res.push(Number(j))
        }
    }

    return res
}

module.exports = majorityElement