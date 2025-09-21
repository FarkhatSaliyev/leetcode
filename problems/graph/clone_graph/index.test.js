const { Node, cloneGraph } = require("./index");

describe("cloneGraph", () => {
  test("returns null when input is null", () => {
    expect(cloneGraph(null)).toBeNull();
  });

  test("clones a single node with no neighbors", () => {
    const node = new Node(1);
    const cloned = cloneGraph(node);

    expect(cloned).not.toBe(node);
    expect(cloned.val).toBe(1);
    expect(cloned.neighbors).toHaveLength(0);
  });

  test("clones a simple graph with two connected nodes", () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.neighbors.push(node2);
    node2.neighbors.push(node1);

    const cloned = cloneGraph(node1);

    expect(cloned).not.toBe(node1);
    expect(cloned.val).toBe(1);
    expect(cloned.neighbors[0].val).toBe(2);

    // Ensure deep clone (not same references)
    expect(cloned.neighbors[0]).not.toBe(node2);
    expect(cloned.neighbors[0].neighbors[0]).toBe(cloned);
  });

  test("clones a square graph (cycle of 4)", () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const n4 = new Node(4);

    n1.neighbors.push(n2, n4);
    n2.neighbors.push(n1, n3);
    n3.neighbors.push(n2, n4);
    n4.neighbors.push(n1, n3);

    const cloned = cloneGraph(n1);

    expect(cloned.val).toBe(1);
    const vals = cloned.neighbors.map(n => n.val).sort();
    expect(vals).toEqual([2, 4]);

    const cloned2 = cloned.neighbors.find(n => n.val === 2);
    const cloned3 = cloned2.neighbors.find(n => n.val === 3);

    expect(cloned3.neighbors.map(n => n.val).sort()).toEqual([2, 4]);
  });
});
