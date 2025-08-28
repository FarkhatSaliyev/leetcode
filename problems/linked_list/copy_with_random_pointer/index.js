class Node {
  constructor(val, next = null, random = null) {
      this.val = val;
      this.next = next;
      this.random = random;
  }
}

function copyRandomList(head) {
    const copiedList = new Map()
    copiedList.set(null, null)
    let copy

    //1st run and make copy
    let curr = head
    while(curr){
        copy = new Node(curr.val)
        copiedList.set(curr, copy)
        curr = curr.next
    }

    //2nd run add connection
    curr = head
    while(curr){
        copy = copiedList.get(curr)
        copy.next = copiedList.get(curr.next)
        copy.random = copiedList.get(curr.random)
        curr = curr.next
    }

    return copiedList.get(head)
}

module.exports = copyRandomList