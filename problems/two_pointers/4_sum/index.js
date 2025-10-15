function fourSum(nums, target){

    const res = []
    const sorted = nums.sort((a,b)=> a-b)

    for(let i=0; i<sorted.length; i++){
        for(let j=i+1; j<sorted.length-1; j++){
            if(i>0 && sorted[i] === sorted[i-1]) continue
            if(j>i+1 && sorted[j] === sorted[j-1]) continue
            
            let l=j+1
            let r=sorted.length-1

            while(l<r){
                if(sorted[i]+sorted[j]+sorted[l]+sorted[r] < target){
                    l++
                }else if(sorted[i]+sorted[j]+sorted[l]+sorted[r] > target){
                    r--
                }else if(sorted[i]+sorted[j]+sorted[l]+sorted[r] === target){
                    res.push([sorted[i], sorted[j], sorted[l], sorted[r]])
                    l++

                    while(l<r && sorted[l] === sorted[l-1]){
                        l++
                    }
                }
            }
        }
    }

    return res
}

module.exports = fourSum