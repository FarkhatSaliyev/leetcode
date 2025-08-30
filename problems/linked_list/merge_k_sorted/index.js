/**
 * Definition for singly-linked list.
*/
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Input: lists = [[1,2,4],[1,3,5],[3,6]]
// Output: [1,1,2,3,3,4,5,6]

function mergeKLists(lists) {
    //Brute force push inside array sort and create list
    // const arr = []

    // //Push everything in array
    // for(let list of lists){
    //     while(list){
    //         arr.push(list.val)
    //         list = list.next
    //     }
    // }

    // // Sort items
    // arr.sort((a,b)=>a-b)

    // //Add everything in list
    // let node = new ListNode(0)
    // let curr = node
    // for(let item in arr){
    //     curr.next = new ListNode(item)
    //     curr = curr.next
    // }

    // return node.next

    //Optimal 
    if(lists.length === 0) return null

    let merged = null
    for(let i=0; i<lists.length; i++){
        merged = mergeLists(merged, lists[i])
    }

    return merged

    function mergeLists(l1, l2){
        let dummy = new ListNode()
        let curr = dummy

        while(l1 && l2){
            if(l1.val < l2.val){
                curr.next = l1
                l1 = l1.next
            }else{
                curr.next = l2
                l2 = l2.next
            }

            curr = curr.next
        }

        if(l1) curr.next = l1
        if(l2) curr.next = l2

        return dummy.next
    }
}

module.exports = mergeKLists