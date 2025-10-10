function sortColors(nums){
    if(nums.length <=1) return

    let mid = Math.floor(nums.length/2)
    let l = nums.slice(0, mid)
    let r = nums.slice(mid)

    function merge(left, right){
        let res = []
        let i = 0
        let j = 0
        
        while(i<left.length && j<right.length){
            if(left[i]<right[j]){
                res.push(left[i])
                i++
            }else {
                res.push(right[j])
                j++
            }
        }

        return res.concat(left.slice(i), right.slice(j))
    }

    sortColors(l)
    sortColors(r)

    const res = merge(l, r)
    for(let i=0; i<nums.length; i++){
        nums[i] = res[i]
    }
}

module.exports = sortColors
