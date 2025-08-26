const mergeTwoLists = require("./index");

describe("mergeTwoLists", () => {
  test("merges two non-empty sorted lists", () => {
    const list1 = { val: 1, next: { val: 3, next: { val: 5, next: null } } };
    const list2 = { val: 2, next: { val: 4, next: { val: 6, next: null } } };

    const merged = mergeTwoLists(list1, list2);

    expect(merged).toEqual({
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: { val: 6, next: null }
            }
          }
        }
      }
    });
  });

  test("handles when one list is empty", () => {
    const list1 = null;
    const list2 = { val: 1, next: { val: 2, next: null } };

    const merged = mergeTwoLists(list1, list2);

    expect(merged).toEqual({ val: 1, next: { val: 2, next: null } });
  });

  test("handles when both lists are empty", () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });

  test("handles lists of different lengths", () => {
    const list1 = { val: 1, next: { val: 3, next: null } };
    const list2 = { val: 2, next: { val: 4, next: { val: 5, next: { val: 6, next: null } } } };

    const merged = mergeTwoLists(list1, list2);

    expect(merged).toEqual({
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: { val: 6, next: null }
            }
          }
        }
      }
    });
  });

  test("handles duplicate values", () => {
    const list1 = { val: 1, next: { val: 2, next: null } };
    const list2 = { val: 1, next: { val: 3, next: null } };

    const merged = mergeTwoLists(list1, list2);

    expect(merged).toEqual({
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: { val: 3, next: null }
        }
      }
    });
  });
});
