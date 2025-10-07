// Input: nums1 = [10,20,20,40,0,0], m = 4, nums2 = [1,2], n = 2

// Output: [1,2,10,20,20,40]

function merge(nums1, m, nums2, n) {
    let l = m-1
    let r = n-1
    let k = m+n-1

    while(r>=0){
        if(l>=0 && nums1[l] > nums2[r]){
            nums1[k] = nums1[l]
            l--
        }else{
            nums1[k] = nums2[r]
            r--
        }
        k--
    }

    return nums1
}

module.exports = merge