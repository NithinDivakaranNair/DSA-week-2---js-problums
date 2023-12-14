function Quick(arr){
    if(arr.length<2){
        return arr
    }

    let left=[];
    let rigth=[];
    let privet=arr[arr.length-1]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>privet){
            rigth.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return [...Quick(left),privet,...Quick(rigth)]
}

console.log(Quick(["lemon", "apple", "orange", "banana"]));