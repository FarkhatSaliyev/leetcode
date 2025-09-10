const findKthLargest = require('./index')

describe('findKthLargest', () => {
  test('Example 1: nums=[3,2,1,5,6,4], k=2', () => {
    expect(findKthLargest([3,2,1,5,6,4], 2)).toBe(5)
  })

  test('Example 2: nums=[3,2,3,1,2,4,5,5,6], k=4', () => {
    expect(findKthLargest([3,2,3,1,2,4,5,5,6], 4)).toBe(4)
  })

  test('Single element array', () => {
    expect(findKthLargest([10], 1)).toBe(10)
  })

  test('Array with duplicates', () => {
    expect(findKthLargest([1,1,1,2,2,3], 2)).toBe(2)
  })

  test('k equals array length', () => {
    expect(findKthLargest([7,8,9], 3)).toBe(7)
  })

  test('Negative numbers', () => {
    expect(findKthLargest([-1,-2,-3,-4], 2)).toBe(-2)
  })
})
