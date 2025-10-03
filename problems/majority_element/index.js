// Input: nums = [5,5,1,1,1,5,5]
// Output: 5

function majorityElement(nums) {
    const obj ={}

    for(let i=0; i<nums.length; i++){
        if(!obj[nums[i]]) obj[nums[i]]=1 
        else obj[nums[i]] +=1
    }

    let count = 0
    let key = 0

    for(let i in obj){
        if(obj[i] > count){
            count = obj[i]
            key = i
        }
    }
    return key
}

module.exports = majorityElement;