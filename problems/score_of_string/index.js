
function scoreOfString(s) {
    let sum = 0

    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i+1)){
            if(s.charCodeAt(i+1) > s.charCodeAt(i)){
                sum+= s.charCodeAt(i+1) - s.charCodeAt(i)
            }else {
                sum+= s.charCodeAt(i) - s.charCodeAt(i+1)
            }
        }
    }

    return sum
}

module.exports = scoreOfString;