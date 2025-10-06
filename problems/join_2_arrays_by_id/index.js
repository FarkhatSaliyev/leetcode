function joinById(arr1, arr2){

    //Create obj 
    const obj = {}

    // Add arr1 by id to obj. obj = {1: {'id':1, 'x':23}}
    for(let i=0; i<arr1.length; i++){
        obj[arr1[i].id] = {...arr1[i]}
    }

    for(let i=0; i<arr2.length; i++){
        obj[arr2[i].id] = obj[arr2[i].id] ? {...obj[arr2[i].id], ...arr2[i]} : {...arr2[i]}
    }

    return Object.values(obj)
}

module.exports = joinById