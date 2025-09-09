//1. chose heavies stone x an y
//2. if x===y detroy stones
//3. if x<y destroy x, and y is y-x 

// Time complexity O(N^2 log N)
function lastStoneWeight(stones) {
    let sorted = stones.sort((a,b)=>a-b)
    
    while(sorted.length > 1){
        let x = sorted.pop()
        let y = sorted.pop()

        if(x !== y){
            sorted.push(x-y)
        }

        sorted.sort((a,b)=> a-b)
    }

    return sorted.length ? sorted[0] : 0
}

module.exports = lastStoneWeight