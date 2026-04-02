function asteroidCollision(asteroids) {
    const stack = []

  for (let a of asteroids) {
    while (stack.length && a < 0 && stack[stack.length - 1] > 0) {
      const diff = a + stack[stack.length - 1];
      if (diff < 0) {
        stack.pop();
      } else if (diff > 0) {
        a = 0;
      } else {
        stack.pop();
        a = 0;
      }
    }

    if (a !== 0) {
      stack.push(a);
    }
  }

  return stack;
}

module.exports = asteroidCollision;
