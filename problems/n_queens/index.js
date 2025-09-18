// To solve the problem 
//1. Draw a board n*n
//2. Need to have set for cols, we remeber position of Q in col
//3. Need to have set for negative Diagonal, we remeber position of negative Diagonal in board (row - col)
//3. Need to have set for postive Diagonal, we remeber position of postive Diagonal in board (row + col)

function solveNQueens(n) {
    const res = []
    const board = Array.from({length: n}, ()=>Array(n).fill('.'))
    const cols = new Set()
    const negDiag = new Set()
    const posDiag = new Set()

    function dfs(row){
        if(row === n){
            let boardStr = board.map(row=>[row.join('')])
            res.push(boardStr)
            return
        }

        for(let col=0; col<n; col++){
            if(cols.has(col) || negDiag.has(row-col) || posDiag.has(row+col)){
                continue
            }

            //Add item
            cols.add(col)
            negDiag.add(row-col) 
            posDiag.add(row+col)
            board[row][col] = 'Q'

            dfs(row+1)

            //Clear for next loop iteration
            cols.delete(col)
            negDiag.delete(row-col) 
            posDiag.delete(row+col)
            board[row][col] = '.'
        }
    }

    dfs(0)
    return res
}

module.exports = solveNQueens