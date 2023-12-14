class Stack{
    constructor(){
        this.items=[]
    }

    push(value){
     return   this.items.push(value)
    }

    pop(){
        if(this.items.length===0){
            return 'underflow'
        }
     return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }
    empty(){
        return this.items.length===0
    }
    size(){
        return this.items.length
    }
}



let list = new  Stack();

list.push("helo")

list.push("helcco")
list.push("hmmmm")
 list.pop()
console.log(list.items);
