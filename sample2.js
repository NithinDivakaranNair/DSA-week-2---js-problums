function rever(str,ta){
let hash={};
let result=[]
for(let i=0;i<str.length;i++){
let current=str[i];
let sumval=ta-current
    if(hash[sumval]!=undefined){
        result.push([current,sumval])
     
    }
    hash[current]=i
}

return result

}
console.log(rever([3,44,55,3,22,],5));