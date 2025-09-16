// Input: 
// board = [
//   ["A","B","C","D"],
//   ["S","A","A","T"],
//   ["A","C","A","E"]
// ],
// word = "CAT"

// Output: true

function exist(board, word) {
    const rows = board.length
    const cols = board[0].length

    function dfs(row, col, wordIdx){
        if(wordIdx === word.length) return true

        if(row<0 || col<0 || row>=rows || col >=cols || word[wordIdx] !== board[row][col]){
            return false
        }

        const visited = board[row][col]
        board[row][col] = true

        const found = 
            dfs(row-1, col, wordIdx+1) ||
            dfs(row+1, col, wordIdx+1) ||
            dfs(row, col-1, wordIdx+1) ||
            dfs(row, col+1, wordIdx+1)
        
        board[row][col] = visited
        return found
    }

    for(let row=0; row<rows; row++){
        for(let col=0; col<cols; col++){
            if(dfs(row, col, 0)) return true
        }
    }

    return false
}

module.exports = exist