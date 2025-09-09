const { TreeNode, serialize, deserialize } = require("./index");

describe("Serialize & Deserialize Binary Tree", () => {
  test("should handle a simple tree", () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const data = serialize(root);
    expect(data).toBe("1,2,null,null,3,null,null");

    const newRoot = deserialize(data);
    expect(serialize(newRoot)).toBe(data); // check round-trip
  });

  test("should handle larger tree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, null, new TreeNode(6))
    );

    const data = serialize(root);
    expect(data).toBe(
      "1,2,4,null,null,5,null,null,3,null,6,null,null"
    );

    const newRoot = deserialize(data);
    expect(serialize(newRoot)).toBe(data);
  });

  test("should handle single node", () => {
    const root = new TreeNode(7);
    const data = serialize(root);
    expect(data).toBe("7,null,null");

    const newRoot = deserialize(data);
    expect(serialize(newRoot)).toBe(data);
  });

  test("should handle null tree", () => {
    const root = null;
    const data = serialize(root);
    expect(data).toBe("null");

    const newRoot = deserialize(data);
    expect(newRoot).toBeNull();
  });

  test("should handle skewed tree", () => {
    const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
    const data = serialize(root);
    expect(data).toBe("1,null,2,null,3,null,null");

    const newRoot = deserialize(data);
    expect(serialize(newRoot)).toBe(data);
  });
});
