function sum(arr,tar){
    let hash={};
    let result=[];
    for(let i=0;i<arr.length;i++){
let current=arr[i];
let sumval=tar-current;
if(hash[sumval]!=undefined){
    result.push([current,sumval])
}
hash[current]=i
    }
    return result
}
console.log(sum([1,2,3,4],5));