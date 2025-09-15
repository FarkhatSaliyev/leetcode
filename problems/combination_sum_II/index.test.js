const combinationSum2 = require('./index') 

describe('combinationSum2', () => {
  test('example case 1', () => {
    const candidates = [10,1,2,7,6,1,5]
    const target = 8
    const result = combinationSum2(candidates, target)
    const expected = [[1,1,6],[1,2,5],[1,7],[2,6]]

    // Compare ignoring order of subsets
    expect(result.sort()).toEqual(expected.sort())
  })

  test('example case 2', () => {
    const candidates = [2,5,2,1,2]
    const target = 5
    const result = combinationSum2(candidates, target)
    const expected = [[1,2,2],[5]]

    expect(result.sort()).toEqual(expected.sort())
  })

  test('no combinations', () => {
    const candidates = [3,4,5]
    const target = 2
    const result = combinationSum2(candidates, target)
    expect(result).toEqual([])
  })

  test('single element equals target', () => {
    const candidates = [2,3,6,7]
    const target = 7
    const result = combinationSum2(candidates, target)
    const expected = [[7]]
    expect(result).toEqual(expected)
  })
})
