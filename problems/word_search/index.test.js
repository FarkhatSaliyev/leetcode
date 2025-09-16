const exist = require('./index')

describe('Word Search - exist(board, word)', () => {
  test('finds word "CAT" in the board', () => {
    const board = [
      ["A","B","C","D"],
      ["S","A","A","T"],
      ["A","C","A","E"]
    ]
    expect(exist(board, "CAT")).toBe(true)
  })

  test('returns false for word not in board', () => {
    const board = [
      ["A","B","C","D"],
      ["S","A","A","T"],
      ["A","C","A","E"]
    ]
    expect(exist(board, "DOG")).toBe(false)
  })

  test('handles single letter word', () => {
    const board = [
      ["A","B"],
      ["C","D"]
    ]
    expect(exist(board, "C")).toBe(true)
    expect(exist(board, "Z")).toBe(false)
  })

  test('handles word longer than board cells', () => {
    const board = [
      ["A","B"],
      ["C","D"]
    ]
    expect(exist(board, "ABCDE")).toBe(false)
  })

  test('handles repeated letters correctly (cannot reuse same cell)', () => {
    const board = [
      ["A","A"],
      ["A","A"]
    ]
    expect(exist(board, "AAAAA")).toBe(false) // only 4 cells available
    expect(exist(board, "AAAA")).toBe(true)   // uses all cells
  })

  test('handles empty word (always true)', () => {
    const board = [
      ["A","B"],
      ["C","D"]
    ]
    expect(exist(board, "")).toBe(true)
  })
})
