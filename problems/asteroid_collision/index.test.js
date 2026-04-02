const asteroidCollision = require('./index');

describe('asteroidCollision', () => {
  test('classic examples from problem statement', () => {
    expect(asteroidCollision([5, 10, -5])).toEqual([5, 10]);
    expect(asteroidCollision([8, -8])).toEqual([]);
    expect(asteroidCollision([10, 2, -5])).toEqual([10]);
  });

  test('all negative or all positive — no collisions between directions', () => {
    expect(asteroidCollision([-2, -1, -2])).toEqual([-2, -1, -2]);
    expect(asteroidCollision([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('[-2,-1,1,2] — no opposite-direction neighbors that collide', () => {
    expect(asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2]);
  });

  test('left-moving asteroid destroys multiple rights', () => {
    expect(asteroidCollision([5, 10, -15])).toEqual([-15]);
  });

  test('equal masses annihilate', () => {
    expect(asteroidCollision([1, -1])).toEqual([]);
    expect(asteroidCollision([2, 1, -2])).toEqual([]);
  });

  test('single element', () => {
    expect(asteroidCollision([42])).toEqual([42]);
    expect(asteroidCollision([-7])).toEqual([-7]);
  });

  test('empty input', () => {
    expect(asteroidCollision([])).toEqual([]);
  });
});
