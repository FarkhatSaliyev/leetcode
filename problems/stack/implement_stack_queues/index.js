class MyStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.stack.length){
            let last = this.stack.pop()
            return last
        }
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack.length){
            return this.stack[this.stack.length - 1]
        }
    }

    /**
     * @return {boolean}
     */
    empty() {
        if(!this.stack.length) return true
        else return false
    }
}

module.exports = MyStack;