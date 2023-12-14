class Hashtable{
    constructor(size){
        this.table=new Array(size);
        this.size=size
    }
hash(key){
    let total=0;
    for(let i=0;i<key.length;i++){
        total+=key.charCodeAt(i)
    }
    return total%this.size
}

set(key,val){
    let index=this.hash(key)
    let bucket=this.table[index]
    if(!bucket){
        this.table[index]=[[key,val]]
    }else{
        let samekey=bucket.find(item=>item[0]===key)
        if(samekey){
            samekey[1]=val
        }else{
            bucket.push([key,val])
        }
    }
}

get(key){
    let index=this.hash(key)
    let bucket=this.table[index]
    if(bucket){
        let samekey=bucket.find(item=>item[0]===key)
        if(samekey){
            return samekey[1]
        }
    }else{
        return undefined
    }
}
remove(key){
    let index=this.hash(key)
    let bucket=this.table[index]
    if(bucket){
        const samekey=bucket.find(item=>item[0]===key)
        if(samekey){
            bucket.splice(bucket.indexOf(samekey),1)
        }
    }
}

display(){
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
            console.log(i,this.table[i])
        }

    }
}

}

const Table=new Hashtable(50)
Table.set("name",'nithin')
Table.set('name','fff')
Table.set('namd','fff')
Table.display()
console.log(Table.get('name'));
Table.remove('name')
Table.display()