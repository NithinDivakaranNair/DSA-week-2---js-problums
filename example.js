class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}

class stack{
    constructor(){
        this.first=null;
        this.last=null;
        
    }

    enqueue(val){
        var newnode=new Node(val)
        if(!this.first){
            this.first=newnode;
           
        }else{
            let temp=this.first
            newnode.next=temp;
            this.first=newnode
        }
        return this
    }

  peek(){
    return this.first.val;
  }

}

let list=new stack()

list.enqueue(5)
list.enqueue(2)
list.enqueue(3)
console.log(list.peek());