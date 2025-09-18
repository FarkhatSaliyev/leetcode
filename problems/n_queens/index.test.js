const solveNQueens = require("./index")

describe("N-Queens", () => {
  test("case 1: n = 1", () => {
    const result = solveNQueens(1)
    const expected = [[["Q"]]]
    expect(result).toEqual(expected)
  })

  test("case 2: n = 2 (no solutions)", () => {
    const result = solveNQueens(2)
    const expected = []
    expect(result).toEqual(expected)
  })

  test("case 3: n = 3 (no solutions)", () => {
    const result = solveNQueens(3)
    const expected = []
    expect(result).toEqual(expected)
  })

  test("case 4: n = 4", () => {
    const result = solveNQueens(4)
    const expected = [
      [[".Q.."], ["...Q"], ["Q..."], ["..Q."]],
      [["..Q."], ["Q..."], ["...Q"], [".Q.."]],
    ]
    expect(result).toEqual(expected)
  })

  test("case 5: n = 5 (check count only)", () => {
    const result = solveNQueens(5)
    expect(result.length).toBe(10)
  })
})
