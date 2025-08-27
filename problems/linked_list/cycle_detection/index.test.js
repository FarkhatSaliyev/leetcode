const hasCycle = require('./index') // adjust import to your file

// Helper to build linked list nodes
function ListNode(val) {
  this.val = val
  this.next = null
}

describe("hasCycle", () => {
  test("returns false for empty list", () => {
    expect(hasCycle(null)).toBe(false)
  })

  test("returns false for single node without cycle", () => {
    const node1 = new ListNode(1)
    expect(hasCycle(node1)).toBe(false)
  })

  test("returns true for single node pointing to itself", () => {
    const node1 = new ListNode(1)
    node1.next = node1
    expect(hasCycle(node1)).toBe(true)
  })

  test("returns false for list with multiple nodes and no cycle", () => {
    const node1 = new ListNode(1)
    const node2 = new ListNode(2)
    const node3 = new ListNode(3)
    node1.next = node2
    node2.next = node3
    expect(hasCycle(node1)).toBe(false)
  })

  test("returns true for list with cycle at the end", () => {
    const node1 = new ListNode(1)
    const node2 = new ListNode(2)
    const node3 = new ListNode(3)
    const node4 = new ListNode(4)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node2 // cycle starts at node2
    expect(hasCycle(node1)).toBe(true)
  })

  test("returns true for list with cycle starting at head", () => {
    const node1 = new ListNode(1)
    const node2 = new ListNode(2)
    const node3 = new ListNode(3)
    node1.next = node2
    node2.next = node3
    node3.next = node1 // cycle back to head
    expect(hasCycle(node1)).toBe(true)
  })
})
