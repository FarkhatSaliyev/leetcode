const KthLargest = require('./index')

describe('KthLargest', () => {
  test('basic functionality', () => {
    const kth = new KthLargest(3, [4, 5, 8, 2])
    expect(kth.add(3)).toBe(4)   // array = [2,3,4,5,8] → 3rd largest = 4
    expect(kth.add(5)).toBe(5)   // [2,3,4,5,5,8] → 3rd largest = 5
    expect(kth.add(10)).toBe(5)  // [2,3,4,5,5,8,10] → 3rd largest = 5
    expect(kth.add(9)).toBe(8)   // [2,3,4,5,5,8,9,10] → 3rd largest = 8
    expect(kth.add(4)).toBe(8)   // [2,3,4,4,5,5,8,9,10] → 3rd largest = 8
  })

  test('negative numbers', () => {
    const kth = new KthLargest(2, [-10, -7, -3, -1])
    expect(kth.add(-5)).toBe(-3)   // [-10,-7,-5,-3,-1] → 2nd largest = -3
    expect(kth.add(0)).toBe(-1)    // [-10,-7,-5,-3,-1,0] → 2nd largest = -1
  })

  test('k equals 1 returns max element', () => {
    const kth = new KthLargest(1, [3, 1, 2])
    expect(kth.add(4)).toBe(4)
    expect(kth.add(0)).toBe(4)
  })

  test('k greater than length returns undefined', () => {
    const kth = new KthLargest(5, [2, 4])
    expect(kth.add(1)).toBeUndefined()
  })
})
