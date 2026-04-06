const StockSpanner = require('./index')

describe('StockSpanner', () => {
  test('matches canonical LeetCode example', () => {
    const spanner = new StockSpanner()
    expect(spanner.next(100)).toBe(1)
    expect(spanner.next(80)).toBe(1)
    expect(spanner.next(60)).toBe(1)
    expect(spanner.next(70)).toBe(2)
    expect(spanner.next(60)).toBe(1)
    expect(spanner.next(75)).toBe(4)
    expect(spanner.next(85)).toBe(6)
  })

  test('strictly increasing prices', () => {
    const spanner = new StockSpanner()
    expect(spanner.next(10)).toBe(1)
    expect(spanner.next(20)).toBe(2)
    expect(spanner.next(30)).toBe(3)
    expect(spanner.next(40)).toBe(4)
  })

  test('strictly decreasing prices', () => {
    const spanner = new StockSpanner()
    expect(spanner.next(40)).toBe(1)
    expect(spanner.next(30)).toBe(1)
    expect(spanner.next(20)).toBe(1)
    expect(spanner.next(10)).toBe(1)
  })

  test('equal prices accumulate span', () => {
    const spanner = new StockSpanner()
    expect(spanner.next(50)).toBe(1)
    expect(spanner.next(50)).toBe(2)
    expect(spanner.next(50)).toBe(3)
  })
})
