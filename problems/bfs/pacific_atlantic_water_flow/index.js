function pacificAtlantic(heights) {
    const rows = heights.length
    const cols = heights[0].length
    const res = []

    function bfs(row,col,ocean){
        const queue = [[row,col]]
        const visited = new Set()
        visited.add(`${row},${col}`)

        while(queue.length){
            const [curRow, curCol] = queue.shift()

            if(ocean === 'pacific' && (curRow === 0 || curCol === 0)) return true
            if(ocean === 'atlantic' && (curRow === rows-1 || curCol === cols-1)) return true

            //Check down
            if(curRow+1<rows && heights[curRow+1][curCol] <= heights[curRow][curCol] 
                && !visited.has(`${curRow+1},${curCol}`)){
                    visited.add(`${curRow+1},${curCol}`)
                    queue.push([curRow+1, curCol])
                }
            //Check up
            if(curRow-1>=0 && heights[curRow-1][curCol] <= heights[curRow][curCol] 
                && !visited.has(`${curRow-1},${curCol}`)){
                    visited.add(`${curRow-1},${curCol}`)
                    queue.push([curRow-1, curCol])
                }
            //Check right
            if(curCol+1<cols && heights[curRow][curCol+1] <= heights[curRow][curCol] 
                && !visited.has(`${curRow},${curCol+1}`)){
                    visited.add(`${curRow},${curCol+1}`)
                    queue.push([curRow, curCol+1])
                }
            //Check left
            if(curCol-1>=0 && heights[curRow][curCol-1] <= heights[curRow][curCol] 
                && !visited.has(`${curRow},${curCol-1}`)){
                    visited.add(`${curRow},${curCol-1}`)
                    queue.push([curRow, curCol-1])
                }
        }

        return false
    }


    for(let row=0; row<rows; row++){
        for(let col=0; col<cols; col++){
            const pacific = bfs(row,col,'pacific')
            const atlantic = bfs(row,col,'atlantic')

            if(pacific && atlantic){
                res.push([row,col])
            }
        }   
    }

    return res
}

module.exports = pacificAtlantic