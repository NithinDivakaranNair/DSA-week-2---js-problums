function dupilcate(arr){
let hashtable={}
let result=[]
for(let val of arr){
    

if(!hashtable[val]){
    hashtable[val]=true;
    result.push(val)
}
}
return result
}
console.log(dupilcate([8,3,4,4,3,2,1]));