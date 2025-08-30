// Input:
// ["LRUCache", [2], "put", [1, 10],  "get", [1], "put", [2, 20], "put", [3, 30], "get", [2], "get", [1]]

// Output:
// [null, null, 10, null, null, 20, -1]

// Explanation:
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 10);  // cache: {1=10}
// lRUCache.get(1);      // return 10
// lRUCache.put(2, 20);  // cache: {1=10, 2=20}
// lRUCache.put(3, 30);  // cache: {2=20, 3=30}, key=1 was evicted
// lRUCache.get(2);      // returns 20 
// lRUCache.get(1);      // return -1 (not found)

// Steps:
// 1. Create Hash Map as cache 
// 2. Create Node, it should be double linked list (add prev and next)
// 3. Start from put method: 
    // 1.If key exist in Map remove 
    // 2.Create a node and set it into Map
// 4. To keep least and most recent position, we use left side as least and right side as most recent:
    // 1. Add to constructor left and right nodes
    // 2. Connect nodes 
// 5. Get method: 
    // 1.If key exist remove from current position and insert (it will be in most right pos) and return key 
    // 2.Return -1 if key do not exist  
// 6. Add remove method, we are removing from middle of List 
// 7. Add insert method, we are adding at most right position:
    // 1. Locate most right 
    // 2. Add item to right position
// 8. Check capacity in put method:
    // 1. If chache size bigger then capacity then locate left item (least used) and remove Linked list
    // 2. Delete form hash map as well

class Node {
    constructor(key, val){
        this.key = key
        this.val = val

        this.prev = null
        this.next = null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()

        this.right = new Node(0)
        this.left = new Node(0)
        this.left.next = this.right
        this.right.prev = this.left
    }

    // [] []  []
    //    []
    remove(node){
        let prev = node.prev
        let next = node.next

        prev.next = next
        next.prev = prev
    }

    // [1] [2] add 3
    // [1] [3] [2]
    insert(node){
        let prev = this.right.prev
        let next = this.right
        
        prev.next = node
        next.prev = node
        node.next = next
        node.prev = prev
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            //Remove and insert to most recent place
            this.remove(this.cache.get(key))
            this.insert(this.cache.get(key))
            return this.cache.get(key).val
        }
 
        return -1
    }


    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            this.remove(this.cache.get(key))
        }

        //1. Create node
        let node = new Node(key, value)
        this.cache.set(key, node)
        this.insert(node)

        if(this.cache.size > this.capacity){
            let lru = this.left.next
            this.remove(lru)
            this.cache.delete(lru.key)
        }
    }

}

module.exports = { LRUCache }