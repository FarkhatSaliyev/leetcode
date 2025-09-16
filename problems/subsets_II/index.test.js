const subsetsWithDup = require('./index')

describe('subsetsWithDup', () => {
  test('handles example with duplicates [1,2,2]', () => {
    const result = subsetsWithDup([1,2,2])
    const expected = [
      [], [1], [1,2], [1,2,2], [2], [2,2]
    ]
    // Sort both arrays for comparison
    expect(result.map(r => r.sort((a,b)=>a-b)).sort()).toEqual(
      expected.map(r => r.sort((a,b)=>a-b)).sort()
    )
  })

  test('handles array without duplicates [1,2,3]', () => {
    const result = subsetsWithDup([1,2,3])
    const expected = [
      [], [1], [2], [3],
      [1,2], [1,3], [2,3],
      [1,2,3]
    ]
    expect(result.map(r => r.sort((a,b)=>a-b)).sort()).toEqual(
      expected.map(r => r.sort((a,b)=>a-b)).sort()
    )
  })

  test('handles empty input []', () => {
    expect(subsetsWithDup([])).toEqual([[]])
  })

  test('handles all same elements [2,2,2]', () => {
    const result = subsetsWithDup([2,2,2])
    const expected = [
      [], [2], [2,2], [2,2,2]
    ]
    expect(result.map(r => r.sort((a,b)=>a-b)).sort()).toEqual(
      expected.map(r => r.sort((a,b)=>a-b)).sort()
    )
  })
})
