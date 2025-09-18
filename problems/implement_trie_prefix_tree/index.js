// Input: 
// ["Trie", "insert", "dog", "search", "dog", "search", "do", "startsWith", "do", "insert", "do", "search", "do"]

// Output:
// [null, null, true, false, true, null, true]

// Explanation:
// PrefixTree prefixTree = new PrefixTree();
// prefixTree.insert("dog");
// prefixTree.search("dog");    // return true
// prefixTree.search("do");     // return false
// prefixTree.startsWith("do"); // return true
// prefixTree.insert("do");
// prefixTree.search("do");     // return true


class PrefixTree {
    constructor() {
        this.data = []
        this.res = []
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        if(word){
            this.data.push(word)
            this.res.push(true)
        }
        this.res.push(false)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        for(let i=0; i<this.data.length; i++){
            if(this.data[i] === word){
                return true
            }
        }
        return false
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        for(let i=0; i<this.data.length; i++){
            if(this.data[i].substring(0, prefix.length) === prefix){
                return true
            }
        }
        return false
    }
}

module.exports = PrefixTree