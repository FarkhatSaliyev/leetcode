
// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
// Output: true

//Flatten and Binary Search
function searchMatrixFlatten(matrix, target) {
    const flatArr = matrix.flat(1)

    let start = 0
    let end = flatArr.length-1

    while(start<=end){
        let mid= Math.floor((start+end)/2)

        if(flatArr[mid] === target){
            return true
        }else if(flatArr[mid] < target){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }

    return false
}

module.exports = searchMatrixFlatten

//Row scan and Binary search
function searchMatrixScan(matrix, target) {
    
    for(let i = 0; i<matrix.length; i++){
        let start = matrix[i][0]
        let end = matrix[i][matrix[i].length-1]

        if(start <= target && end >= target){
            for(let j=0; j<matrix[i].length; j++){
                if(matrix[i][j]===target){
                    return true
                }
            }
        }
    }

    return false
}

module.exports = searchMatrixScan