// Problem 

// You are given an integer array heights where heights[i] represents the height of the i/th bar.
// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Input: height = [1,7,2,5,4,7,3,6]
// Output: 36

function maxArea(heights) {
    // Brute force
    // let res = 0
    // for(let i=0; i<heights.length; i++){
    //     for(let j=i+1; j<heights.length; j++){
    //         res = Math.max(res, (j-i) * Math.min(heights[i], heights[j]))
    //     }
    // }

    // return res

    // Optimal 
    let l = 0
    let r = heights.length-1
    let res = 0

    while(l<r){
        // Area = Width × Height
        let area = (r-l) * Math.min(heights[l], heights[r])
        res = Math.max(res, area)

        if(heights[l]<heights[r]){
            l++
        }else{
            r--
        }
    }

    return res
}

module.exports = maxArea;