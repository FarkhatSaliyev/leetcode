const reverseKGroup = require("./index")

function arrayToList(arr) {
  let dummy = { next: null }
  let curr = dummy
  for (let val of arr) {
    curr.next = { val, next: null }
    curr = curr.next
  }
  return dummy.next
}

function listToArray(head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}

test("reverseKGroup with k=3", () => {
  const head = arrayToList([1,2,3,4,5,6])
  const result = reverseKGroup(head, 3)
  expect(listToArray(result)).toEqual([3,2,1,6,5,4])
})

test("reverseKGroup with k=2", () => {
  const head = arrayToList([1,2,3,4,5])
  const result = reverseKGroup(head, 2)
  expect(listToArray(result)).toEqual([2,1,4,3,5])
})

test("reverseKGroup with k=1 (no change)", () => {
  const head = arrayToList([1,2,3,4,5])
  const result = reverseKGroup(head, 1)
  expect(listToArray(result)).toEqual([1,2,3,4,5])
})

test("reverseKGroup with k larger than list length", () => {
  const head = arrayToList([1,2,3])
  const result = reverseKGroup(head, 5)
  expect(listToArray(result)).toEqual([1,2,3])
})

test("reverseKGroup with empty list", () => {
  const head = arrayToList([])
  const result = reverseKGroup(head, 3)
  expect(listToArray(result)).toEqual([])
})
