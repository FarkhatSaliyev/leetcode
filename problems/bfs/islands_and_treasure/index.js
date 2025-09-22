function islandsAndTreasure(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const queue = []
    const inf = 2147483647

    for(let row=0; row<rows; row++){
        for(let col=0; col<cols; col++){
            if(grid[row][col] === 0){
                queue.push([row, col])
            }
        }
    }

    while(queue.length){
        const [currRow, currCol] = queue.shift()

        // Check up
        if(currRow-1>=0 && grid[currRow-1][currCol] === inf){
            grid[currRow-1][currCol] = grid[currRow][currCol] + 1
            queue.push([currRow-1,currCol])
        }

        // Check down
        if(currRow+1<rows && grid[currRow+1][currCol] === inf){
            grid[currRow+1][currCol] = grid[currRow][currCol] + 1
            queue.push([currRow+1,currCol])
        }

        // Check left
        if(currCol-1>=0 && grid[currRow][currCol-1] === inf){
            grid[currRow][currCol-1] = grid[currRow][currCol] + 1
            queue.push([currRow,currCol-1])
        }

        // Check right
        if(currCol+1<cols && grid[currRow][currCol+1] === inf){
            grid[currRow][currCol+1] = grid[currRow][currCol] + 1
            queue.push([currRow,currCol+1])
        }
    }

    return grid
}   

module.exports = islandsAndTreasure