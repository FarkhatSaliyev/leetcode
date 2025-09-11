const taskScheduler = require("./index");

describe("taskScheduler", () => {
  test("Example 1: tasks with idle time", () => {
    expect(taskScheduler(["A","A","A","B","B","B"], 2)).toBe(8);
  });

  test("Example 2: tasks without idle time", () => {
    expect(taskScheduler(["A","A","B","C","D","E"], 2)).toBe(6);
  });

  test("All tasks are the same", () => {
    expect(taskScheduler(["A","A","A","A"], 3)).toBe(13);
    // schedule: A _ _ _ A _ _ _ A _ _ _ A
  });

  test("No cooldown (n=0)", () => {
    expect(taskScheduler(["A","A","A","B","B","B"], 0)).toBe(6);
  });

  test("Single task", () => {
    expect(taskScheduler(["A"], 5)).toBe(1);
  });
});
