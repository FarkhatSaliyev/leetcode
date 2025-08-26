const reverseList = require("./index");

describe("reverseList", () => {
  test("reverses a list of multiple nodes", () => {
    const head = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
    const reversed = reverseList(head);
    expect(reversed).toEqual({
      val: 3,
      next: { val: 2, next: { val: 1, next: null } }
    });
  });

  test("reverses a list with two nodes", () => {
    const head = { val: 1, next: { val: 2, next: null } };
    const reversed = reverseList(head);
    expect(reversed).toEqual({
      val: 2,
      next: { val: 1, next: null }
    });
  });

  test("returns same node for single node list", () => {
    const head = { val: 1, next: null };
    const reversed = reverseList(head);
    expect(reversed).toEqual({ val: 1, next: null });
  });

  test("returns null for empty list", () => {
    const reversed = reverseList(null);
    expect(reversed).toBeNull();
  });

  test("reverses list with duplicate values", () => {
    const head = { 
      val: 1, 
      next: { val: 2, next: { val: 2, next: { val: 3, next: null } } } 
    };
    const reversed = reverseList(head);
    expect(reversed).toEqual({
      val: 3,
      next: { val: 2, next: { val: 2, next: { val: 1, next: null } } }
    });
  });
});
