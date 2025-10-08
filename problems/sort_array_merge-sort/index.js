function sortArray(nums){
    if(nums.length <=1) return nums

    let mid = Math.floor(nums.length/2)
    let l = nums.slice(0, mid)
    let r = nums.slice(mid)

    let leftSorted = sortArray(l)
    let rightSorted = sortArray(r)

    function merge(left, right){
        let res = []
        let l = 0
        let r = 0

        while(l<left.length && r<right.length){
            if(left[l] < right[r]){
                res.push(left[l])
                l++
            }else {
                res.push(right[r])
                r++
            }
        }

        return res.concat(left.slice(l), right.slice(r))
    }

    return merge(leftSorted, rightSorted)
}

module.exports = sortArray