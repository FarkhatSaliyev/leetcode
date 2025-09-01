// Input: head = [1,2,3,4,5,6], k = 3

// Output: [3,2,1,6,5,4]

function reverseKGroup(head, k) {
    //Plan 
    //0. Add base condition
    //1. Find K element
    //2. Cut list from k element and save connection to second part
    //3. Reverse cutted part
    //4. Run reverseKGroup recursevly if there is other parts 
    //5. Return prev since it is new head of reversed block

    //Base condition
    if(!head || k<=1) return head

    //     i
    //[1,2,3,4,5,6]
    let kElem = head
    let count = 1
    while(kElem && count<k){
        kElem = kElem.next
        count += 1
    }

    if(!kElem) return head

    let secondPart = kElem.next
    kElem.next = null

    let prev = null
    let curr = head
    let next = null
    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next 
    }

    head.next = reverseKGroup(secondPart, k)
    return prev
}

module.exports = reverseKGroup