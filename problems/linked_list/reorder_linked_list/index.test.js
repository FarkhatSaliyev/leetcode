const reorderList = require('./index')

// Helper to build linked list nodes
function ListNode(val) {
  this.val = val
  this.next = null
}

// Helper to convert linked list to array for easy comparison
function listToArray(head) {
  const result = []
  let curr = head
  while (curr) {
    result.push(curr.val)
    curr = curr.next
  }
  return result
}

describe("reorderList", () => {
  test("returns null for empty list", () => {
    expect(reorderList(null)).toBe(null)
  })

  test("returns same list for single node", () => {
    const node1 = new ListNode(1)
    expect(listToArray(reorderList(node1))).toEqual([1])
  })

  test("reorders two-node list correctly", () => {
    const node1 = new ListNode(1)
    const node2 = new ListNode(2)
    node1.next = node2
    expect(listToArray(reorderList(node1))).toEqual([1, 2])
  })

  test("reorders odd-length list correctly", () => {
    const node1 = new ListNode(1)
    const node2 = new ListNode(2)
    const node3 = new ListNode(3)
    const node4 = new ListNode(4)
    const node5 = new ListNode(5)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    expect(listToArray(reorderList(node1))).toEqual([1, 5, 2, 4, 3])
  })

  test("reorders even-length list correctly", () => {
    const node1 = new ListNode(1)
    const node2 = new ListNode(2)
    const node3 = new ListNode(3)
    const node4 = new ListNode(4)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    expect(listToArray(reorderList(node1))).toEqual([1, 4, 2, 3])
  })

  test("works for longer list", () => {
    const nodes = Array.from({ length: 6 }, (_, i) => new ListNode(i + 1))
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1]
    }
    expect(listToArray(reorderList(nodes[0]))).toEqual([1, 6, 2, 5, 3, 4])
  })
})
