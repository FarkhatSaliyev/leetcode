function solve(board) {
    const rows = board.length
    const cols = board[0].length

    function bfs(row, col){
        const queue = [[row,col]]
        board[row][col] = '#'

        while(queue.length){
            const [curRow, curCol] = queue.shift()

            //check up
            if(curRow-1>=0 && board[curRow-1][curCol] === 'O'){
                queue.push([curRow-1, curCol])
                board[curRow-1][curCol] = '#'
            }
            //check down
            if(curRow+1<rows && board[curRow+1][curCol] === 'O'){
                queue.push([curRow+1, curCol])
                board[curRow+1][curCol] = '#'
            }
            //check left
            if(curCol-1>=0 && board[curRow][curCol-1] === 'O'){
                queue.push([curRow, curCol-1])
                board[curRow][curCol-1] = '#'
            }
            //check right
            if(curCol+1<cols && board[curRow][curCol+1] === 'O'){
                queue.push([curRow, curCol+1])
                board[curRow][curCol+1] = '#'
            }
        }
    }

    //Run only for border O
    for(let row=0; row<rows; row++){
        for(let col=0; col<cols; col++){
            if(board[row][col] === 'O' && 
                (row === 0 || row === rows-1 || col === 0 || col === cols-1)){
                bfs(row,col)
            }
        }    
    }

    //Flip to X
    for(let row=0; row<rows; row++){
        for(let col=0; col<cols; col++){
            if(board[row][col] === 'O'){
                board[row][col] = 'X'
            }else if (board[row][col] === '#'){
                board[row][col] = 'O'
            }
        }    
    }

    return board
}

module.exports = solve