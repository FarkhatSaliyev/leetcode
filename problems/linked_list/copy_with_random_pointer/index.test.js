const copyRandomList = require('./index'); 

// Helper to create Node
function Node(val, next = null, random = null) {
  this.val = val;
  this.next = next;
  this.random = random;
}

// Helper to compare two lists (values and random pointers)
function compareLists(l1, l2) {
  const map1 = new Map();
  const map2 = new Map();
  
  let cur1 = l1;
  let cur2 = l2;
  
  while(cur1 && cur2) {
    if(cur1.val !== cur2.val) return false;
    map1.set(cur1, cur2);
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  
  if(cur1 || cur2) return false;

  // Check random pointers
  cur1 = l1;
  cur2 = l2;
  while(cur1) {
    if(map1.get(cur1.random) !== cur2.random) return false;
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  
  return true;
}

describe("copyRandomList", () => {
  test("returns null for empty list", () => {
    expect(copyRandomList(null)).toBeNull();
  });

  test("copies single node with no random", () => {
    const node1 = new Node(1);
    const copied = copyRandomList(node1);
    expect(copied).not.toBe(node1);
    expect(copied.val).toBe(1);
    expect(copied.random).toBeNull();
    expect(copied.next).toBeNull();
  });

  test("copies list with random pointers", () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    node1.next = node2;
    node2.next = node3;

    node1.random = node3;
    node2.random = node1;
    node3.random = node2;

    const copied = copyRandomList(node1);
    expect(compareLists(node1, copied)).toBe(true);
    expect(copied).not.toBe(node1);
  });

  test("copies list with self random pointers", () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.next = node2;
    node1.random = node1;
    node2.random = node2;

    const copied = copyRandomList(node1);
    expect(compareLists(node1, copied)).toBe(true);
    expect(copied).not.toBe(node1);
    expect(copied.next).not.toBe(node2);
  });
});
