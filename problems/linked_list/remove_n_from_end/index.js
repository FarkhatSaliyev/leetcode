// Input: head = [1,2,3,4], n = 2
// Output: [1,2,4]

function removeNthFromEnd(head, n) {
    if(!head) return null

    // Reverse list
    let prev = null
    let curr = head
    let next = null

    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    head = prev

    //Remove n element from reverse list
    if(n===1){
        head = head.next
    }else{
        let curr = head
        // n=3
        //    i
        // [1,2,3,4]
        for(let i=1; i<n-1 && curr; i++){    
            curr = curr.next
        }
        if(curr && curr.next){
            curr.next = curr.next.next
        }
    }

    //Reverse list back
    prev = null
    curr = head
    next = null
    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}

module.exports = removeNthFromEnd