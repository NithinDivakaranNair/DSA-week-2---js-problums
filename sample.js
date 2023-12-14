function stringreverse(str){
    var str1=[]
 for(let char of str){
str1.push(char)
 }

 let revstr=''
 while(str1.length>0){
     revstr+=str1.pop()
 }
return revstr
}

console.log(stringreverse("helo"));