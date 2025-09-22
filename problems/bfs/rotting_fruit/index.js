function orangesRotting(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const queue = []
    let count = -1

    for(let row=0; row<rows; row++){
        for(let col=0; col<cols; col++){
            if(grid[row][col] === 2){
                queue.push([row, col])
            }
        }    
    }

    while(queue.length){
        let size = queue.length

        for(let i=0; i<size; i++){
            const [currRow, currCol] = queue.shift()

            if(currRow-1>=0 && grid[currRow-1][currCol] === 1){
                grid[currRow-1][currCol] = 2
                queue.push([currRow-1, currCol])
            }
            if(currRow+1<rows && grid[currRow+1][currCol] === 1){
                grid[currRow+1][currCol] = 2
                queue.push([currRow+1, currCol])
            }
            if(currCol-1>=0 && grid[currRow][currCol-1] === 1){
                grid[currRow][currCol-1] = 2
                queue.push([currRow, currCol-1])
            }
            if(currCol+1<cols && grid[currRow][currCol+1] === 1){
                grid[currRow][currCol+1] = 2
                queue.push([currRow, currCol+1])
            }
        }

        count+=1
    }

    for(let row=0; row<rows; row++){
        for(let col=0; col<cols; col++){
            if(grid[row][col] === 1){
                return -1
            }
        }    
    }

    return count === -1 ? 0 : count
}

module.exports = orangesRotting