class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp){
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push([value, timestamp])
    }

    //key: [[val, timeStamp], [val, timeStamp]]

    get(key, timestamp){
        let res = ''
        let val = this.keyStore.get(key) || []
        let left = 0
        let right = val.length - 1

        while(left<=right){
            let mid = Math.floor((left+right)/2)

            if(val[mid][1] <= timestamp){
                res = val[mid][0]
                left = mid + 1
            }else {
                right = mid - 1
            }
        }

        return res
    }
}

module.exports = TimeMap