const mergeKLists = require('./index')

// Helper to build linked list nodes
function ListNode(val, next = null) {
  this.val = val
  this.next = next
}

// Helper to convert linked list to array (for easier test assertions)
function linkedListToArray(head) {
  const arr = []
  let current = head
  while (current) {
    arr.push(current.val)
    current = current.next
  }
  return arr
}

describe('mergeKLists', () => {
  test('returns null for empty list', () => {
    expect(mergeKLists([])).toBeNull()
  })

  test('merges a single list correctly', () => {
    const list1 = new ListNode(1, new ListNode(3, new ListNode(5)))
    expect(linkedListToArray(mergeKLists([list1]))).toEqual([1, 3, 5])
  })

  test('merges two lists correctly', () => {
    const list1 = new ListNode(1, new ListNode(4, new ListNode(5)))
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
    expect(linkedListToArray(mergeKLists([list1, list2]))).toEqual([1, 1, 3, 4, 4, 5])
  })

  test('merges multiple lists correctly', () => {
    const list1 = new ListNode(1, new ListNode(4, new ListNode(5)))
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
    const list3 = new ListNode(2, new ListNode(6))
    expect(linkedListToArray(mergeKLists([list1, list2, list3]))).toEqual([1, 1, 2, 3, 4, 4, 5, 6])
  })

  test('handles lists with null elements', () => {
    const list1 = null
    const list2 = new ListNode(0)
    expect(linkedListToArray(mergeKLists([list1, list2]))).toEqual([0])
  })
})
