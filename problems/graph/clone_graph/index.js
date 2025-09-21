
// Definition for a Node.
class Node {
    constructor(val = 0, neighbors = []) {
      this.val = val;
      this.neighbors = neighbors;
    }
}

function cloneGraph(node) {
    if(!node) return null

    const map = new Map()

    function dfs(node){
        if(map.has(node)){
           return map.get(node)
        }

        let copy = new Node(node.val)
        map.set(node, copy)

        for(let neighb of node.neighbors){
            copy.neighbors.push(dfs(neighb))
        }

        return copy
    }

    return dfs(node)
}

module.exports = { Node, cloneGraph }