// Problem 

// You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.
// Return the maximum area of water that can be trapped between the bars.

// Input: height = [0,2,0,3,1,0,1,3,2,1]
// Output: 9

function trap(height) {
    let res = 0
    let area = 0
    let l = 0
    let r = height.length-1
    let maxL = 0
    let maxR = 0

    while(l<r){
        if(height[l]<height[r]){
            maxL = Math.max(maxL, height[l])
            if(maxL > height[l]){
                area = maxL - height[l]
                res+= area
            }
            l++
        }else{
            maxR = Math.max(maxR, height[r])
            if(maxR > height[r]){
                area = maxR - height[r]
                res+= area
            }
            r--
        }
    }

    return res
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));