const combinationSum = require('./index');

describe('combinationSum', () => {
  test('example case [2,3,6,7], target=7', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual(
      expect.arrayContaining([
        [2, 2, 3],
        [7]
      ])
    );
  });

  test('case with no valid combination', () => {
    expect(combinationSum([5, 10], 3)).toEqual([]);
  });

  test('case with multiple combinations', () => {
    expect(combinationSum([2, 3, 5], 8)).toEqual(
      expect.arrayContaining([
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5]
      ])
    );
  });

  test('single element repeated to reach target', () => {
    expect(combinationSum([4], 12)).toEqual([[4, 4, 4]]);
  });

  test('empty candidates array', () => {
    expect(combinationSum([], 7)).toEqual([]);
  });
});
