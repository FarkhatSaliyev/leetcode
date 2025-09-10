const kClosest = require('./index')

describe('kClosest', () => {
  test('Example 1: points=[[1,3],[-2,2]], k=1', () => {
    const points = [[1,3], [-2,2]]
    const k = 1
    expect(kClosest(points, k)).toEqual([[-2,2]])
  })

  test('Example 2: points=[[3,3],[5,-1],[-2,4]], k=2', () => {
    const points = [[3,3],[5,-1],[-2,4]]
    const k = 2
    const result = kClosest(points, k)
    expect(result.sort()).toEqual([[3,3], [-2,4]].sort())
  })

  test('points=[[0,2],[2,2],[3,3]], k=2', () => {
    const points = [[0,2],[2,2],[3,3]]
    const k = 2
    const result = kClosest(points, k)
    expect(result.sort()).toEqual([[0,2],[2,2]].sort())
  })

  test('k equals length of points', () => {
    const points = [[1,1],[2,2],[3,3]]
    const k = 3
    const result = kClosest(points, k)
    expect(result.sort()).toEqual([[1,1],[2,2],[3,3]].sort())
  })

  test('single point', () => {
    const points = [[5,5]]
    const k = 1
    expect(kClosest(points, k)).toEqual([[5,5]])
  })
})
