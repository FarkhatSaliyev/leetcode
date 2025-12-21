function calPoints(operations) {
    const stack = []

    for(let i=0; i<operations.length; i++){
        if(operations[i] === '+'){
            stack.push(stack[stack.length-1] + stack[stack.length-2])
        }
        else if(operations[i] === 'C'){
            stack.pop()
        }
        else if(operations[i] === 'D'){
            stack.push(stack[stack.length-1] * 2)
        }
        else {
            stack.push(parseInt(operations[i]))
        }
    }

    return stack.reduce((acc, curr)=> acc + curr, 0)
}

module.exports = calPoints