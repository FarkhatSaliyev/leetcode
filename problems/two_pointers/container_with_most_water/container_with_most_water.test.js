const maxArea = require('./container_with_most_water');

test('Example 1: [1,8,6,2,5,4,8,3,7]', () => {
  expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
});

test('Example 2: [1,1]', () => {
  expect(maxArea([1,1])).toBe(1);
});

test('Single element', () => {
  expect(maxArea([1])).toBe(0);
});

test('Two elements - different heights', () => {
  expect(maxArea([1, 5])).toBe(1);
});

test('Two elements - same height', () => {
  expect(maxArea([3, 3])).toBe(3);
});

test('Three elements', () => {
  expect(maxArea([1, 2, 1])).toBe(2);
});

test('All same height', () => {
  expect(maxArea([4,4,4,4])).toBe(12);
});

test('Increasing heights', () => {
  expect(maxArea([1,2,3,4,5])).toBe(6);
});

test('Decreasing heights', () => {
  expect(maxArea([5,4,3,2,1])).toBe(6);
});

test('Complex case', () => {
  expect(maxArea([2,3,4,5,18,17,6])).toBe(17);
});
