class MyHashMap {
    constructor() {
        this.map = []
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i][0] === key) {
                this.map[i][1] = value; // update existing value
                return;
            }
        }
        this.map.push([key, value])
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        for(let i=0; i<this.map.length; i++){
            if(this.map[i][0] === key){
                return this.map[i][1]
            }
        }
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.map = this.map.filter(item=> (
            item[0] !== key
        ))
    }
}

module.exports = MyHashMap