function maxAreaOfIsland(grid) {
    if(!grid.length) return 0

    let maxArea = 0
    let rows = grid.length
    let cols = grid[0].length
    let queue = []

    function bfs(row, col){
        let currArea = 0
        grid[row][col] = 0
        queue.push([row,col])
        currArea+=1

        while(queue.length){
            const [currRow, currCol] = queue.shift()

            //Check right
            if(currCol+1<cols && grid[currRow][currCol+1] === 1){
                grid[currRow][currCol+1] = 0
                queue.push([currRow, currCol+1])
                currArea+=1
            }

            //Check left
            if(currCol-1>=0 && grid[currRow][currCol-1] === 1){
                grid[currRow][currCol-1] = 0
                queue.push([currRow, currCol-1])
                currArea+=1
            }

            //Check down
            if(currRow+1<rows && grid[currRow+1][currCol] === 1){
                grid[currRow+1][currCol] = 0
                queue.push([currRow+1, currCol])
                currArea+=1
            }

            //Check up
            if(currRow-1>=0 && grid[currRow-1][currCol] === 1){
                grid[currRow-1][currCol] = 0
                queue.push([currRow-1, currCol])
                currArea+=1
            }
        }

        return currArea
    }

    for(let row=0; row<rows; row++){
        for(let col=0; col<cols; col++){
            if(grid[row][col] === 1){
                maxArea = Math.max(maxArea, bfs(row,col))
            }
        }
    }

    return maxArea
}

module.exports = maxAreaOfIsland