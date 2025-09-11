// Input: tasks = ["X","X","Y","Y"], n = 2
// Output: 5

//1. We need to count tasks
//2. We need to find MaxFrequent task
//3. Count how many MaxFrequent tasks we have
//4. Calculate time, 
//  - it is maxFrequent task - 1 (since last task don't need idle, tha't why we subtract 1)
//  - Multiple by n + 1 (we add 1 because we need to now amount of blocks)
//  - Add MaxFrequent 
//5. Return max between tasks length and time, (tasks can have unique values)


function taskScheduler(tasks, n) { 
    //1. We need to count tasks
    const obj = {}
    for(let i=0; i<tasks.length; i++){
        if(!obj[tasks[i]]){
            obj[tasks[i]] = 0
        }
        obj[tasks[i]] += 1
    }

    //2. We need to find MaxFrequent task
    let maxFrequent = 0
    for(let item in obj){
        if(obj[item] > maxFrequent){
            maxFrequent = obj[item]
        }
    }

    //3. Count how many MaxFrequent tasks we have
    let countMaxFrequent = 0
    for(let item in obj){
        if(obj[item] === maxFrequent){
            countMaxFrequent +=1
        }
    }

    const time = (maxFrequent - 1) * (n + 1) + countMaxFrequent
    return Math.max(tasks.length, time)
}

module.exports = taskScheduler