function numRescueBoats(people, limit) {
    
    const sorted = people.sort((a,b)=> a-b)
    let res = 0    
    let l = 0
    let r = sorted.length - 1

    while(l<=r){
        if(sorted[l] + sorted[r] <= limit){
            l++
            r--
        }else{
            r--
        }
        res++
    }

    return res
}

module.exports = numRescueBoats